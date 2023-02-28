import { useQuery } from 'react-query';

import { fetchArtistDetails } from '../services/Artist.services';

const useFetchArtistDetails = (id: string) => {
  const {
    isLoading: isArtistLoading,
    data: artist,
    error,
  } = useQuery('artist', async () => {
    const response = await fetchArtistDetails(id);
    if (!response) {
      throw new Error('Error while fetching artist details');
    }
    return response.artist;
  });
  return {
    artist,
    isArtistLoading,
    error,
  };
};

export default useFetchArtistDetails;
