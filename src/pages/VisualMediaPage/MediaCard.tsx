import React, { useState } from "react";

interface MediaCardProps {
  image?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => setIsLoaded(true), 50);
  };

  return (
    <div className="media-card">
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
