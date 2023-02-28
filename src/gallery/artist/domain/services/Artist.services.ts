import { IArtistForm } from './../types/artist.type';
import type { IArtistResponse, IArtistsResponse } from '../types/artist.type';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

// export const fetchArtistDetails = async (
//   id: string
// ): Promise<IArtistResponse> => {
//   const response = await fetch(`${BACKEND_URL}artists/${id}`);
//   return response.json();
// };

export const fetchArtistDetails = async (
  id: string
): Promise<IArtistResponse> => {
  const response = await fetch(`${BACKEND_URL}artists/${id}`);
  console.log('test:', response);
  return response.json();
};

export const updateArtistProfile = async (
  id: string,
  params: IArtistForm
): Promise<IArtistForm> => {
  const response = await fetch(`${BACKEND_URL}artists/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'RANDOM_TOKEN_SECRET',
    },
  });
  return response.json();
};

export const fetchAllArtistsInfos = async (): Promise<IArtistsResponse> => {
  const response = await fetch(`${URL}artists/`);
  return response.json();
};
