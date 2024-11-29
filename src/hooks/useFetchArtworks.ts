import { useState, useEffect } from "react";
import { GalleryCardType } from "../components/GalleryCard";
import { fetchArtworks } from "../fetchApi";

const useFetchArtworks = (
  isOnView: boolean = false,
  isPublicDomain: boolean = false,
  isHiddenGem: boolean = false,
  searchTerm: string = ""
) => {
  const [artworks, setArtworks] = useState<GalleryCardType[]>([]);

  useEffect(() => {
    const getArtworks = async () => {
      const data = await fetchArtworks(
        isOnView,
        isPublicDomain,
        isHiddenGem,
        searchTerm
      );
      setArtworks(data.data);
    };

    getArtworks();
  }, [isHiddenGem, isOnView, isPublicDomain, searchTerm]);

  return artworks;
};

export default useFetchArtworks;
