import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

type TFiltersModalProps = {
  isOpen: boolean;
  onClose: () => void;
  localFilters: {
    isOnView: boolean;
    isPublicDomain: boolean;
    isHiddenGem: boolean;
    searchQuery: string;
  };
  setLocalFilters: (filters: {
    isOnView: boolean;
    isPublicDomain: boolean;
    isHiddenGem: boolean;
    searchQuery: string;
  }) => void;
  onSubmit: (e: React.FormEvent) => void;
};

const FiltersModal: React.FC<TFiltersModalProps> = ({
  isOpen,
  onClose,
  localFilters,
  setLocalFilters,
  onSubmit,
}) => {
  const toggleFilter = (key: keyof typeof localFilters) => {
    setLocalFilters({
      ...localFilters,
      [key]: !localFilters[key],
    });
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilters({
      ...localFilters,
      searchQuery: e.target.value,
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Filter Options"
      className="modal-content"
      overlayClassName="modal-overlay"
    >
      <h2 className="modal-title">Filters & Search</h2>
      <div className="filters-container">
        {[
          ["isHiddenGem", "Hidden gem"],
          ["isOnView", "On view"],
          ["isPublicDomain", "Public domain"],
        ].map(([value, text]) => (
          <button
            key={text}
            onClick={() => toggleFilter(value as keyof typeof localFilters)}
            className={
              localFilters[value as keyof typeof localFilters]
                ? "active-button"
                : ""
            }
          >
            {text}
          </button>
        ))}
      </div>
      <form className="search-bar" onSubmit={onSubmit}>
        <input
          type="text"
          value={localFilters.searchQuery}
          onChange={handleSearchQueryChange}
          placeholder="Search …"
        />
        <div className="search-buttons">
          <button type="button" className="close-button" onClick={onClose}>
            Close
          </button>
          <button type="submit" className="submit-button">
            Search
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default FiltersModal;
