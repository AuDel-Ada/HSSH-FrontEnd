export const fetchArtistDetails = async (id: string) => {
  const response = await fetch(`http://localhost:8000/artists/${id}`);
  return response.json();
};
