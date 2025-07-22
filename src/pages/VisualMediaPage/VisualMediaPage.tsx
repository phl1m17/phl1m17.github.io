import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import "./VisualMedia.css";

interface MediaItem {
  image: string;
}

const media: MediaItem[] = [];
for (let i = 1; i <= 25; i++) {
  media.push({ image: `/Photo/p${i}.jpg` });
}

function VisualMediaPage() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + media.length) % media.length);
    }
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % media.length);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") handleClose();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  useEffect(() => {
    document.body.style.overflow = currentIndex !== null ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [currentIndex]);

  return (
    <>
      <div className="media-grid">
        {media.map((mediaItem, idx) => (
          <MediaCard
            key={idx}
            image={mediaItem.image}
            onClick={() => handleOpen(idx)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="modal" onClick={handleClose}>
          <img
            src={media[currentIndex].image}
            alt="Full view"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="close-button" onClick={handleClose}>
            ✕
          </button>
          <button className="nav-button left" onClick={handlePrev}>
            ‹
          </button>
          <button className="nav-button right" onClick={handleNext}>
            ›
          </button>
        </div>
      )}
    </>
  );
}

export default VisualMediaPage;
