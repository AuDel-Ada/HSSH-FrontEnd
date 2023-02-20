import type { IArtistResponse } from '../types/artist.type';

export const fetchArtistDetails = async (
  id: string
): Promise<IArtistResponse> => {
  const response = await fetch(`http://localhost:8000/artists/${id}`);
  return response.json();
};
