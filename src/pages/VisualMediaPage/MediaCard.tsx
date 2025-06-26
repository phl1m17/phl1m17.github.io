import React, { useState } from "react";

interface MediaCardProps {
  image?: string;
  onClick?: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => setIsLoaded(true), 50);
  };

  return (
    <div className="media-card" onClick={onClick}>
      {image && (
        <div className="media-image-wrapper">
          <img
            src={image}
            className={`media-image ${isLoaded ? "loaded" : ""}`}
            onLoad={handleImageLoad}
            alt="Visual Media"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default MediaCard;
