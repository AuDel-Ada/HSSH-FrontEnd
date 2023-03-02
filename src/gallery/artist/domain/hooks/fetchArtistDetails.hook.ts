import { useQuery } from 'react-query';

import { fetchArtistDetails } from '../services/Artist.services';

const useFetchArtistDetails = (id: string) => {
  const queryKeyArtist = 'artist';
  const {
    isLoading: isArtistLoading,
    data: artist,
    error,
  } = useQuery(queryKeyArtist, async () => {
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
    queryKeyArtist,
  };
};

export default useFetchArtistDetails;
