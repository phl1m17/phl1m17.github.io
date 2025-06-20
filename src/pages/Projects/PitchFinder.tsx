import React, { useEffect, useState, useRef } from "react";
import { MdWeb } from "react-icons/md";
import "./SectionCard.css";

function yinPitchDetector(
  buffer: Float32Array,
  sampleRate: number
): number | null {
  const threshold = 0.15;
  const yinBuffer = new Float32Array(buffer.length / 2);
  let tau, i;

  for (tau = 0; tau < yinBuffer.length; tau++) {
    yinBuffer[tau] = 0;
    for (i = 0; i < yinBuffer.length; i++) {
      const delta = buffer[i] - buffer[i + tau];
      yinBuffer[tau] += delta * delta;
    }
  }

  yinBuffer[0] = 1;
  let runningSum = 0;
  for (tau = 1; tau < yinBuffer.length; tau++) {
    runningSum += yinBuffer[tau];
    yinBuffer[tau] *= tau / runningSum;
  }

  let tauEstimate = -1;
  for (tau = 1; tau < yinBuffer.length; tau++) {
    if (yinBuffer[tau] < threshold) {
      while (
        tau + 1 < yinBuffer.length &&
        yinBuffer[tau + 1] < yinBuffer[tau]
      ) {
        tau++;
      }
      tauEstimate = tau;
      break;
    }
  }

  if (tauEstimate === -1) return null;

  return sampleRate / tauEstimate;
}

function generateNoteFrequencies(): Record<string, number> {
  const noteNames = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const frequencies: Record<string, number> = {};
  const A4_INDEX = 48;
  const A4_FREQ = 440;

  for (let i = 0; i < 88; i++) {
    const semitoneOffset = i - A4_INDEX;
    const frequency = A4_FREQ * Math.pow(2, semitoneOffset / 12);

    const noteNumber = i + 1;
    const noteName = noteNames[(noteNumber + 8) % 12];
    const octave = Math.floor((noteNumber + 8) / 12);

    const note = noteName + octave;
    frequencies[note] = parseFloat(frequency.toFixed(2));
  }

  return frequencies;
}

function getClosestNote(frequency: number): string {
  let closestNote = "";
  let minDiff = Infinity;

  for (const [note, freq] of Object.entries(pianoFrequencies)) {
    const diff = Math.abs(freq - frequency);
    if (diff < minDiff) {
      minDiff = diff;
      closestNote = note;
    }
  }

  return closestNote;
}

const pianoFrequencies = generateNoteFrequencies();
console.log(pianoFrequencies);

const PitchFinder: React.FC = () => {
  const [pitch, setPitch] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;

    const bufferLength = 2048;
    const buffer = new Float32Array(bufferLength);

    const init = async () => {
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext;
      await audioContext.resume();

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const source = audioContext.createMediaStreamSource(stream);
      sourceRef.current = source;

      const analyser = audioContext.createAnalyser();
      analyser.fftSize = bufferLength;
      analyserRef.current = analyser;

      source.connect(analyser);

      const detect = () => {
        analyser.getFloatTimeDomainData(buffer);
        const detectedPitch = yinPitchDetector(buffer, audioContext.sampleRate);
        if (detectedPitch && detectedPitch < 2000 && detectedPitch > 50) {
          setPitch(detectedPitch);
        } else {
          setPitch(null);
        }
        animationFrameIdRef.current = requestAnimationFrame(detect);
      };
      detect();
    };

    init();

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
      setPitch(null);
    };
  }, [started]);

  const handleStart = () => {
    setStarted(true);
  };

  const handleStop = () => {
    setStarted(false);
  };

  return (
    <div className="section-card">
      <h3 className="section-title">
        <span className="section-icon">
          <MdWeb /> Pitch Finder{" "}
        </span>
      </h3>
      <p>
        This function finds the main pitch in an audio sample using the YIN
        algorithm. It looks for repeating patterns in the sound wave to estimate
        the closest pitch you’re singing or playing. A threshold helps decide
        how sure it is about the pitch detected.
      </p>
      <div className="app">
        {!started ? (
          <button onClick={handleStart}>Start Pitch Finder</button>
        ) : (
          <div className="app">
            <p className={`note ${pitch ? "detected" : ""}`}>
              {pitch ? `${getClosestNote(pitch)}` : "Listening..."}
            </p>
            <p>{pitch ? `${pitch.toFixed(2)} Hz` : "\u00A0"}</p>
            <button onClick={handleStop}>Stop Pitch Finder</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PitchFinder;
