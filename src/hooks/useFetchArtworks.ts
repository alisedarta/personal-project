import { useState, useEffect } from "react";
import { GalleryCardType } from "../components/GalleryCard";
import { fetchArtworks } from "../fetchApi";

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
