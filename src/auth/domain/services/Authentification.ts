import { IAuthFormInput } from './../types/auth.type';
const URL = 'http://localhost:8000/artists';

export const signUpArtist = async (params: IAuthFormInput) => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};
