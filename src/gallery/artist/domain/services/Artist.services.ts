import { IArtistForm } from './../types/artist.type';
import type { IArtistResponse } from '../types/artist.type';

export const fetchArtistDetails = async (
  id: string
): Promise<IArtistResponse> => {
  const response = await fetch(`http://localhost:8000/artists/${id}`);
  return response.json();
};

export const updateArtistProfile = async (id: string, params: IArtistForm) => {
  console.log('params', params);
  const response = await fetch(`http://localhost:8000/artists/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      name: params.name,
      password: params.password,
      pronouns: params.pronouns,
      bio: params.bio,
      country: params.country,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  console.log('response', response);
  return response.json();
};
