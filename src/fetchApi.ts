export const fetchArtworks = async () => {
  try {
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?page=1&limit=10&fields=title,artist_title,place_of_origin,date_display,image_id"
    );

    if (!response.ok) {
      throw new Error(`Error fetching API. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
