import GalleryCard, { GalleryCardType } from "./GalleryCard";
import "../gallery.css";

type GalleryGridProps = {
  artworks: GalleryCardType[];
};

function GalleryGrid({ artworks }: GalleryGridProps) {
  const createImageURL = (imageId: string) => {
    const url = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
    return url;
  };

  const generateLocation = (place: string, date: string) => {
    return `${place}, ${date}`;
  };

  return (
    <>
      <ul className="grid-container">
        {artworks?.map((artwork) => (
          <li key={artwork.imageId}>
            <GalleryCard
              title={artwork.title}
              artist={artwork.artistTitle}
              location={generateLocation(
                artwork.placeOfOrigin,
                artwork.dateDisplay
              )}
              image={createImageURL(artwork.imageId)}
              altText={artwork.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GalleryGrid;
