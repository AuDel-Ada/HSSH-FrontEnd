import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useFetchAllArtistsInfos from './fetchAllArtistsInfos.hook';
import { deleteArtist } from '../services/Artist.services';

const useDeleteArtistAccount = (id: string) => {
  const { queryKeyArtists } = useFetchAllArtistsInfos();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteArtistAction = useMutation(() => deleteArtist(id), {
    onSuccess: async () => {
      localStorage.clear();
      await queryClient.invalidateQueries(queryKeyArtists);
      navigate('/home', { replace: true });
    },
    onError: () => console.log('error'),
  });

  return {
    deleteArtistAction,
  };
};

export default useDeleteArtistAccount;
