import { useQueryClient, useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import useFetchAllArtistsInfos from './fetchAllArtistsInfos.hook';
import { deleteArtist } from '../services/Artist.services';
import useFetchArtistDetails from './fetchArtistDetails.hook';

const useDeleteArtistAccount = (id: string) => {
  const { queryKeyArtists } = useFetchAllArtistsInfos();
  const { queryKeyArtist } = useFetchArtistDetails(id);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const deleteArtistAction = useMutation(() => deleteArtist(id), {
    onSuccess: async () => {
      localStorage.clear();
      await queryClient.invalidateQueries(queryKeyArtists);
      await queryClient.invalidateQueries(queryKeyArtist);

      navigate('/home', { replace: true });
    },
    onError: () => console.log('error'),
  });

  return {
    deleteArtistAction,
  };
};

export default useDeleteArtistAccount;
