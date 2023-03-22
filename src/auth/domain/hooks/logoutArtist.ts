import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import useFetchArtistDetails from '../../../gallery/artist/domain/hooks/fetchArtistDetails.hook';

const useLogoutArtist = (id: string) => {
  const { queryKeyArtist } = useFetchArtistDetails(id);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const logout = async () => {
    localStorage.clear();
    await queryClient.invalidateQueries(queryKeyArtist);
    navigate('/join/login', { replace: true });
  };

  return { logout };
};

export default useLogoutArtist;
