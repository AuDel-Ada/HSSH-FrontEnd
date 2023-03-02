import { IArtistForm, IAddNftForm } from './../types/artist.type';
import { useQueryClient, useMutation } from 'react-query';

import { updateArtistProfile } from '../services/Artist.services';
import useFetchAllArtistsInfos from './fetchAllArtistsInfos.hook';

const useUpdateArtistDetails = () => {
  const queryClient = useQueryClient();
  const { queryKeyArtists } = useFetchAllArtistsInfos();
  const updateArtistDetails = useMutation(
    ({
      artistId,
      artistDetails,
    }: {
      artistId: string;
      artistDetails: IArtistForm | IAddNftForm;
    }) => {
      return updateArtistProfile(artistId, artistDetails);
    },
    {
      // TODO add toaster to inform users for success or fail
      onSuccess: async () => {
        await queryClient.invalidateQueries(queryKeyArtists);
      },
      onError: () => console.log('error'),
    }
  );

  return {
    updateArtistDetails,
  };
};

export default useUpdateArtistDetails;
