import { IArtistUpdate } from './../types/artist.type';
import { useQueryClient, useMutation } from 'react-query';

import { updateArtistProfile } from '../services/Artist.services';

const useUpdateArtistDetails = () => {
  const queryClient = useQueryClient();
  const updateArtistDetails = useMutation(
    (params) => {
      return updateArtistProfile(params.id, params.info);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries('artist');
        console.log('ok');
      },
      onError: () => console.log('error'),
    }
  );

  return {
    updateArtistDetails,
  };
};

export default useUpdateArtistDetails;
