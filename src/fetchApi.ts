export const fetchArtworks = async (
  isOnView: boolean,
  isPublicDomain: boolean,
  isHiddenGem: boolean
) => {
  try {
    const query = {
      query: {
        bool: {
          must: [
            ...(isOnView ? [{ term: { is_on_view: true } }] : []),
            ...(isPublicDomain ? [{ term: { is_public_domain: true } }] : []),
            ...(isHiddenGem
              ? [{ term: { has_not_been_viewed_much: true } }]
              : []),
          ],
        },
      },

      limit: 10,

      fields: [
        "title",
        "artist_title",
        "place_of_origin",
        "date_display",
        "image_id",
      ],
    };

    const params = encodeURIComponent(JSON.stringify(query));
    const url = `https://api.artic.edu/api/v1/artworks/search?params=${params}`;

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
