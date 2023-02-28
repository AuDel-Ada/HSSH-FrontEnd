import { IAuthFormInput } from './../types/auth.type';

const AUTH_URL = import.meta.env.VITE_AUTH_URL;

export const signUpArtist = async (params: IAuthFormInput) => {
  const response = await fetch(AUTH_URL, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

export const loginArtist = async (params: IAuthFormInput) => {
  const response = await fetch(`${AUTH_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};
