import { useEffect, useState } from "react";
import useFetchArtworks from "../hooks/useFetchArtworks";
import GalleryGrid from "./GalleryGrid";
import Modal from "react-modal";
import "../modal.css";

function Overview() {
  const [localIsOnView, setLocalIsOnView] = useState(
    () => localStorage.getItem("isOnView") === "true"
  );
  const [localIsPublicDomain, setLocalIsPublicDomain] = useState(
    () => localStorage.getItem("isPublicDomain") === "true"
  );
  const [localIsHiddenGem, setLocalIsHiddenGem] = useState(
    () => localStorage.getItem("isHiddenGem") === "true"
  );
  const [localSearchQuery, setLocalSearchQuery] = useState(
    localStorage.getItem("searchQuery") || ""
  );

  // Final state for filters and search to be used in API call
  const [isOnView, setIsOnView] = useState(localIsOnView);
  const [isPublicDomain, setIsPublicDomain] = useState(localIsPublicDomain);
  const [isHiddenGem, setIsHiddenGem] = useState(localIsHiddenGem);
  const [searchQuery, setSearchQuery] = useState(localSearchQuery);

  const isFiltersActive =
    isOnView || isPublicDomain || isHiddenGem || localSearchQuery !== "";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOnView(localIsOnView);
    setIsPublicDomain(localIsPublicDomain);
    setIsHiddenGem(localIsHiddenGem);
    setSearchQuery(localSearchQuery);
    setIsDialogOpen(false);
  };

  const artworks = useFetchArtworks(
    isOnView,
    isPublicDomain,
    isHiddenGem,
    searchQuery
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    if (!isDialogOpen) {
      setLocalIsOnView(isOnView);
      setLocalIsPublicDomain(isPublicDomain);
      setLocalIsHiddenGem(isHiddenGem);
      setLocalSearchQuery(searchQuery);
    }
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    localStorage.setItem("isOnView", JSON.stringify(isOnView));
    localStorage.setItem("isPublicDomain", JSON.stringify(isPublicDomain));
    localStorage.setItem("isHiddenGem", JSON.stringify(isHiddenGem));
    localStorage.setItem("searchQuery", searchQuery);
  }, [isOnView, isPublicDomain, isHiddenGem, searchQuery]);

  return (
    <div className="container">
      <h1 className="title-and-button">
        Overview
        <button className="material-symbols-outlined" onClick={toggleDialog}>
          tune
          {isFiltersActive && <span className="active-indicator"></span>}
        </button>
      </h1>
      <Modal
        isOpen={isDialogOpen}
        onRequestClose={toggleDialog}
        contentLabel="Filter Options"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2 className="modal-title">Filters & Search</h2>
        <div className="filters-container">
          <button
            onClick={() => setLocalIsHiddenGem(!localIsHiddenGem)}
            className={localIsHiddenGem ? "" : "disabled-filter"}
          >
            Hidden gem
          </button>
          <button
            onClick={() => setLocalIsOnView(!localIsOnView)}
            className={localIsOnView ? "" : "disabled-filter"}
          >
            On view
          </button>
          <button
            onClick={() => setLocalIsPublicDomain(!localIsPublicDomain)}
            className={localIsPublicDomain ? "" : "disabled-filter"}
          >
            Public domain
          </button>
        </div>
        <form className="search-bar">
          <input
            type="text"
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            placeholder="Search ..."
          />
          <div className="search-buttons">
            <button className="close-button" onClick={toggleDialog}>
              Close
            </button>
            <button onClick={handleSearch} className="submit-button">
              Search
            </button>
          </div>
        </form>
      </Modal>
      <GalleryGrid artworks={artworks} />
    </div>
  );
}

export default Overview;
