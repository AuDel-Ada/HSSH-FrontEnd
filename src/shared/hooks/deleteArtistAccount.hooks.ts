import { useQueryClient, useMutation } from 'react-query';

import { deleteArtist } from '../services/deleteArtistAccount';

const useDeleteArtistAccount = () => {
  const deleteArtistAction = useMutation((id: string) => deleteArtist(id), {
    onSuccess: () => {
      localStorage.clear();
      //redirect
    },
    onError: () => console.log('error'),
  });

  return {
    deleteArtistAction,
  };
};

export default useDeleteArtistAccount;
