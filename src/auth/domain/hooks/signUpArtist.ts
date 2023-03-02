import { IAuthFormInput } from './../types/auth.type';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signUpArtist } from '../services/Authentification';
import useFetchAllArtistsInfos from '../../../gallery/artist/domain/hooks/fetchAllArtistsInfos.hook';
const useSignUpArtist = () => {
  const queryClient = useQueryClient();
  const { queryKeyArtists } = useFetchAllArtistsInfos();
  const navigate = useNavigate();

  const createNewArtist = useMutation(
    (params: IAuthFormInput) => {
      return signUpArtist(params);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries(queryKeyArtists);
        navigate('/join/login', { replace: true });
      },
      onError: () => console.log('error'),
    }
  );

  return {
    createNewArtist,
  };
};

export default useSignUpArtist;
