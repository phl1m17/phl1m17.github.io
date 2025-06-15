import React from "react";
import "./SectionCard.css";

interface SectionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
  githubLink?: string;
  liveLink?: string;
  children?: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  description,
  icon,
  image,
  githubLink,
  liveLink,
  children,
}) => {
  return (
    <div className="section-card">
      <div className="section-content">
        <h3 className="section-title">
          <span className="section-icon">{icon}</span> {title}
        </h3>
        <p>{description}</p>
        {children}

        {(githubLink || liveLink) && (
          <div className="section-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                Live Site
              </a>
            )}
          </div>
        )}
      </div>

      {image && (
        <div className="section-image-wrapper">
          <img src={image} alt={title} className="section-image" />
        </div>
      )}
    </div>
  );
};

export default SectionCard;
