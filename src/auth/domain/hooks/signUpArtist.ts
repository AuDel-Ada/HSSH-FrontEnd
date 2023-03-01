import { IAuthFormInput } from './../types/auth.type';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { signUpArtist } from '../services/Authentification';

const useSignUpArtist = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const createNewArtist = useMutation(
    (params: IAuthFormInput) => {
      return signUpArtist(params);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('artists');
        navigate('/login', { replace: true });
      },
      onError: () => console.log('error'),
    }
  );

  return {
    createNewArtist,
  };
};

export default useSignUpArtist;
