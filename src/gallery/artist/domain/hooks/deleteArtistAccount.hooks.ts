import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { deleteArtist } from '../services/Artist.services';

const useDeleteArtistAccount = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteArtistAction = useMutation((id: string) => deleteArtist(id), {
    onSuccess: async () => {
      localStorage.clear();
      await queryClient.invalidateQueries('artists');
      navigate('/home', { replace: true });
    },
    onError: () => console.log('error'),
  });

  return {
    deleteArtistAction,
  };
};

export default useDeleteArtistAccount;
