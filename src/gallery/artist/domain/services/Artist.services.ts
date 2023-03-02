import { IArtistForm, IAddNftForm } from './../types/artist.type';
import type { IArtistResponse, IArtistsResponse } from '../types/artist.type';

const AUTH_URL = import.meta.env.VITE_AUTH_URL;

export const fetchAllArtistsInfos = async (): Promise<IArtistsResponse> => {
  const response = await fetch(`${AUTH_URL}/`);
  return response.json();
};

export const fetchArtistDetails = async (
  id: string
): Promise<IArtistResponse> => {
  const response = await fetch(`${AUTH_URL}/${id}`);
  return response.json();
};

export const updateArtistProfile = async (
  id: string,
  params: IArtistForm | IAddNftForm
) => {
  const response = await fetch(`${AUTH_URL}/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: import.meta.env.VITE_AUTH_SECRET,
    },
  });
  return response.json();
};

export const deleteArtist = async (id: string) => {
  const response = await fetch(`${AUTH_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: import.meta.env.VITE_AUTH_SECRET,
    },
  });
  if (!response) {
    console.log('error');
  }
  return response;
};
