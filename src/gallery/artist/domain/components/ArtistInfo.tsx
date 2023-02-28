import React from 'react';

import useFetchArtistDetails from '../hooks/fetchArtistDetails.hook';
import ArtistInfoLeft from './ArtistInfoLeft';
import ArtistInfoRight from './ArtistInfoRight';

const ArtistInfo: React.FC = () => {
  const { artist, isArtistLoading, error } = useFetchArtistDetails(
    // TODO add a valid id please
    '63fe10e7f2e3c164b09e831d'
  );
  if (isArtistLoading) {
    return <h2 className="m-4">Loading...</h2>;
  } else if (error || !artist) {
    return <h2 className="m-4">Error...</h2>;
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
