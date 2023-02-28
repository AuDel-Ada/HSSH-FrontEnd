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
        localStorage.setItem('artistToken', response.result.token);
        localStorage.setItem('artistId', response.result.artistId);
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
