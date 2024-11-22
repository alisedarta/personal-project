import { useEffect, useState } from "react";
import useFetchArtworks from "../hooks/useFetchArtworks";
import GalleryGrid from "./GalleryGrid";

function Overview() {
  const [isOnView, setIsOnView] = useState(
    () => localStorage.getItem("isOnView") === "true"
  );
  const [isPublicDomain, setIsPublicDomain] = useState(
    () => localStorage.getItem("isPublicDomain") === "true"
  );
  const [isHiddenGem, setIsHiddenGem] = useState(
    () => localStorage.getItem("isHiddenGem") === "true"
  );
  const artworks = useFetchArtworks(isOnView, isPublicDomain, isHiddenGem);

  useEffect(() => {
    localStorage.setItem("isOnView", JSON.stringify(isOnView));
    localStorage.setItem("isPublicDomain", JSON.stringify(isPublicDomain));
    localStorage.setItem("isHiddenGem", JSON.stringify(isHiddenGem));
  }, [isOnView, isPublicDomain, isHiddenGem]);
  return (
    <div className="container">
      <h1>Overview</h1>
      <div className="filters-container">
        <button
          onClick={() => setIsHiddenGem(!isHiddenGem)}
          className={isHiddenGem ? "" : "disabled-filter"}
        >
          Hidden gem
        </button>
        <button
          onClick={() => setIsOnView(!isOnView)}
          className={isOnView ? "" : "disabled-filter"}
        >
          On view
        </button>
        <button
          onClick={() => setIsPublicDomain(!isPublicDomain)}
          className={isPublicDomain ? "" : "disabled-filter"}
        >
          Public domain
        </button>
      </div>
      <GalleryGrid artworks={artworks} />
    </div>
  );
}

export default Overview;
