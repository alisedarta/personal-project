export const fetchArtworks = async (
  isOnView: boolean,
  isPublicDomain: boolean,
  isHiddenGem: boolean,
  searchTerm: string
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const params = new URLSearchParams();
    params.append("limit", "12");
    if (isOnView) params.append("is_on_view", "true");
    if (isPublicDomain) params.append("is_public_domain", "true");
    if (isHiddenGem) params.append("is_hidden_gem", "true");
    if (searchTerm) params.append("searchTerm", searchTerm);

    //const params = encodeURIComponent(JSON.stringify(query));
    const url = `https://gallery-backend-wota.onrender.com/galleryItem?${params.toString()}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching API. Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
