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
