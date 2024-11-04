import GalleryCard, { GalleryCardType } from "./GalleryCard";

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
        {artworks.map((artwork) => (
          <li key={artwork.image_id}>
            <GalleryCard
              title={artwork.title}
              artist={artwork.artist_title}
              location={generateLocation(
                artwork.place_of_origin,
                artwork.date_display
              )}
              image={createImageURL(artwork.image_id)}
              altText={artwork.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GalleryGrid;
