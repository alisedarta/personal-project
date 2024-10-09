import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import { GalleryCardType } from "./GalleryCard";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const staticImage: GalleryCardType = {
  title: "The Bedroom",
  artist_title: "Vincent van Gogh",
  date_display: "Saint-Rémy-de-Provence, 1889",
  place_of_origin: "something",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/0/0b/Vincent_van_Gogh_-_The_Bedroom_-_Google_Art_Project.jpg",
  image_id: "10",
};

function GalleryGrid() {
  const [artworks, setArtworks] = useState<GalleryCardType[]>([]);
  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await fetch(
          "https://api.artic.edu/api/v1/artworks?page=1&fields=title,artist_title,place_of_origin,date_display,image_id"
        );

        if (!response.ok) {
          throw new Error(`Error fetching API. Status: ${response.status}`);
        }
        const data = await response.json();
        setArtworks(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    (async () => await fetchArtworks())();
  }, []);

  const createImageURL = (imageId: string) => {
    const url = `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
    return url;
  };

  const generateLocation = (place: string, date: string) => {
    return `${place}, ${date}`;
  };

  return (
    <>
      <h1>Overview</h1>
      <ul>
        <div className="grid-container">
          {" "}
          {artworks.map((artwork) => (
            <li>
              {" "}
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
        </div>
      </ul>

      {console.log(artworks)}
    </>
  );
}

export default GalleryGrid;
