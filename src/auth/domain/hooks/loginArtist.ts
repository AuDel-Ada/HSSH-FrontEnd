import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { loginArtist } from '../services/Authentification';
import { IAuthFormInput } from './../types/auth.type';

const useLoginArtist = () => {
  const navigate = useNavigate();
  const connectArtist = useMutation(
    (params: IAuthFormInput) => {
      return loginArtist(params);
    },
    {
      onSuccess: async (response) => {
        localStorage.setItem('auth', response.result.token);
        localStorage.setItem('userId', response.result.artistId);
        navigate('../../home');
      },
      onError: () => console.log('error'),
    }
  );

  return {
    connectArtist,
  };
};

export default useLoginArtist;
