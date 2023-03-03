import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchArtistDetails from '../hooks/fetchArtistDetails.hook';
import ArtistInfoLeft from './ArtistInfoLeft';
import ArtistInfoRight from './ArtistInfoRight';

const ArtistInfo: React.FC = () => {
  const { id } = useParams();
  const { artist, isArtistLoading, error } = useFetchArtistDetails(
    id as string
  );
  if (isArtistLoading || artist?._id !== id) {
    return <h2 className="m-4">Loading...</h2>;
  } else if (error || !artist) {
    return <h2 className="m-4">Error...</h2>;
  } else if (!artist.smartContractNumber?.length) {
    return (
      <section>
        <article className="w-full">
          <ArtistInfoLeft artist={artist}></ArtistInfoLeft>
        </article>
      </section>
    );
  }

  return (
    <section className="w-screen md:flex">
      <article className="w-full md:w-1/2">
        <ArtistInfoLeft artist={artist}></ArtistInfoLeft>
      </article>
      <article className="w-full md:w-1/2">
        <ArtistInfoRight artist={artist}></ArtistInfoRight>
      </article>
    </section>
  );
};

export default ArtistInfo;
