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
  return (
    <div className="card">
      <img
        alt={altText}
        src={image}
        className="art-image"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "https://eagle-sensors.com/wp-content/uploads/unavailable-image.jpg";
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
