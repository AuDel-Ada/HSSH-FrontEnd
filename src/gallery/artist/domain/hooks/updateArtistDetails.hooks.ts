import { IArtistForm } from './../types/artist.type';
import { useQueryClient, useMutation } from 'react-query';

import { updateArtistProfile } from '../services/Artist.services';

const useUpdateArtistDetails = () => {
  const queryClient = useQueryClient();
  const updateArtistDetails = useMutation(
    ({
      artistId,
      artistDetails,
    }: {
      artistId: string;
      artistDetails: IArtistForm;
    }) => {
      return updateArtistProfile(artistId, artistDetails);
    },
    {
      // TODO add toaster to inform users for success or fail
      onSuccess: async () => {
        await queryClient.invalidateQueries('artist');
      },
      onError: () => console.log('error'),
    }
  );

  return {
    updateArtistDetails,
  };
};

export default useUpdateArtistDetails;
