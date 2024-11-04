import { useState, useEffect } from "react";
import { fetchArtworks } from "./fetchApi";
import { GalleryCardType } from "./components/GalleryCard";

const useFetchArtworks = () => {
  const [artworks, setArtworks] = useState<GalleryCardType[]>([]);

  useEffect(() => {
    const getArtworks = async () => {
      const data = await fetchArtworks();
      setArtworks(data.data);
    };

    getArtworks();
  }, []);

  return artworks;
};

export default useFetchArtworks;
