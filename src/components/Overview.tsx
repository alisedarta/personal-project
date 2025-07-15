import { useEffect, useState } from "react";
import useFetchArtworks from "../hooks/useFetchArtworks";
import GalleryGrid from "./GalleryGrid";
import FiltersModal from "./FiltersModal";
import "../modal.css";

function Overview() {
  const [localFilters, setLocalFilters] = useState(() => ({
    isOnView: localStorage.getItem("isOnView") === "true",
    isPublicDomain: localStorage.getItem("isPublicDomain") === "true",
    isHiddenGem: localStorage.getItem("isHiddenGem") === "true",
    searchQuery: localStorage.getItem("searchQuery") || "",
  }));

  const [filters, setFilters] = useState(localFilters);

  const isFiltersActive =
    filters.isOnView ||
    filters.isPublicDomain ||
    filters.isHiddenGem ||
    filters.searchQuery !== "";

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(localFilters);
    setIsDialogOpen(false);
  };

  const artworks = useFetchArtworks(
    filters.isOnView,
    filters.isPublicDomain,
    filters.isHiddenGem,
    filters.searchQuery
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    if (!isDialogOpen) {
      setLocalFilters(filters);
    }
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    localStorage.setItem("isOnView", JSON.stringify(filters.isOnView));
    localStorage.setItem(
      "isPublicDomain",
      JSON.stringify(filters.isPublicDomain)
    );
    localStorage.setItem("isHiddenGem", JSON.stringify(filters.isHiddenGem));
    localStorage.setItem("searchQuery", filters.searchQuery);
  }, [filters]);

  return (
    <div className="container">
      <h1 className="title-and-button">
        Overview
        <button className="material-symbols-outlined" onClick={toggleDialog}>
          tune
          {isFiltersActive && <span className="active-indicator"></span>}
        </button>
      </h1>
      <FiltersModal
        isOpen={isDialogOpen}
        onClose={toggleDialog}
        localFilters={localFilters}
        setLocalFilters={setLocalFilters}
        onSubmit={handleSearch}
      />
      <GalleryGrid artworks={artworks} />
    </div>
  );
}

export default Overview;
