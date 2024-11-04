import useFetchArtworks from "../useFetchArtworks";
import GalleryGrid from "./GalleryGrid";

function Overview() {
  const artworks = useFetchArtworks();
  return (
    <div>
      <h1>Overview</h1>
      <GalleryGrid artworks={artworks} />
    </div>
  );
}

export default Overview;
