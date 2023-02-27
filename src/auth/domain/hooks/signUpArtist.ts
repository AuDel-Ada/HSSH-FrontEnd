import { IAuthFormInput } from './../types/auth.type';
import { useMutation, useQueryClient } from 'react-query';

import { signUpArtist } from '../services/Authentification';

const useSignUpArtist = () => {
  const queryClient = useQueryClient();

  const createNewArtist = useMutation(
    (params: IAuthFormInput) => {
      return signUpArtist(params);
    },
    {
      onSuccess: async () => {
        // TODO
        // await queryClient.invalidateQueries('artists');
      },
      onError: () => console.log('error'),
    }
  );

  return {
    createNewArtist,
  };
};

export default useSignUpArtist;
