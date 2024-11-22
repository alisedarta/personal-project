import { useState } from "react";
import unavailableImage from "../assets/unavailable-image.jpg";
import "../gallery.css";
export type GalleryCardType = {
  title: string;
  artist_title: string;
  place_of_origin: string;
  date_display: string;
  image?: string;
  image_id: string;
};

function GalleryCard({
  title,
  artist,
  location,
  image,
  altText,
}: {
  title: string;
  artist: string;
  location: string;
  image: string;
  altText: string;
}) {
  const [imageSource, setImageSource] = useState(image);
  return (
    <div className="card">
      <img
        alt={altText}
        src={imageSource}
        className="art-image"
        onError={() => {
          if (imageSource !== unavailableImage) {
            setImageSource(unavailableImage);
          }
        }}
      ></img>
      <div className="card-info">
        <div className="card-all-text">
          <div className="title-and-artist">
            <h3 className="card-title">{title}</h3>
            <p className="artist-name">{artist}</p>
          </div>
          <p className="card-location">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default GalleryCard;
