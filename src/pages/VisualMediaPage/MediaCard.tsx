import React from "react";

interface MediaCardProps {
  image?: string;
}

const MediaCard: React.FC<MediaCardProps> = ({ image }) => {
  return (
    <div className="media-card">
      {image && (
        <div className="media-image-wrapper">
          <img src={image} className="media-image" alt="Visual Media" />
        </div>
      )}
    </div>
  );
};

export default MediaCard;
