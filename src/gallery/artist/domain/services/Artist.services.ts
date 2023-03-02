import { IArtistForm, IAddNftForm } from './../types/artist.type';
import type { IArtistResponse, IArtistsResponse } from '../types/artist.type';

const URL = 'http://localhost:8000/';

export const fetchArtistDetails = async (
  id: string
): Promise<IArtistResponse> => {
  const response = await fetch(`${URL}artists/${id}`);
  return response.json();
};

export const updateArtistProfile = async (
  id: string,
  params: IArtistForm | IAddNftForm
) => {
  const response = await fetch(`${URL}artists/${id}`, {
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

export const deleteArtist = async (id: string) => {
  const URL = 'http://localhost:8000/artists';

  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: 'RANDOM_TOKEN_SECRET',
    },
  });
  if (!response) {
    console.log('error');
  }
  return response;
};
