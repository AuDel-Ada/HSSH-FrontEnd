import { IArtistForm } from './../types/artist.type';
import type { IArtistResponse } from '../types/artist.type';

import dotenv from 'dotenv';

dotenv.config();

const BACKEND_URL = process.env.BACKEND_URL;
console.log(BACKEND_URL);
console.log(import.meta.env);

export const fetchArtistDetails = async (
  id: string
): Promise<IArtistResponse> => {
  const response = await fetch(`${BACKEND_URL}artists/${id}`);
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
      Authorization: 'AUTH_SECRET',
    },
  });
  return response.json();
};
