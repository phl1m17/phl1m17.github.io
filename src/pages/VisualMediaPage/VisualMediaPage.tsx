import MediaCard from "./MediaCard";
import "./VisualMedia.css";

interface MediaItem {
  image: string;
}

const media: MediaItem[] = [];
for (let i = 1; i <= 19; i++) {
  media.push({ image: `/Photo/p${i}.jpg` });
}

function VisualMediaPage() {
  return (
    <div className="media-grid">
      {media.map((mediaItem, idx) => (
        <MediaCard key={idx} image={mediaItem.image} />
      ))}
    </div>
  );
}

export default VisualMediaPage;
