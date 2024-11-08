import useFetchArtworks from "../hooks/useFetchArtworks";
import GalleryGrid from "./GalleryGrid";

function Overview() {
  const artworks = useFetchArtworks();
  return (
    <div className="container">
      <h1>Overview</h1>
      <GalleryGrid artworks={artworks} />
    </div>
  );
}

export default Overview;
