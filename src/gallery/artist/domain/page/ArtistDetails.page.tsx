import React from 'react';
import LayoutBlack from '../../../../shared/components/LayoutBlack';
import Header from '../../../../shared/components/Header';
import useFetchArtistDetails from '../hooks/fetchArtistDetails.hook';

const ArtistDetails: React.FC = () => {
  const { artist, isArtistLoading, error } = useFetchArtistDetails(
    // add a valid id please
    '63d7d08'
  );

  if (isArtistLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error...</h2>;
  }

  return (
    <LayoutBlack
      childComponent={
        <>
          <Header />
          <div className="w-screen h-screen overflow-hidden	">
            <div className="w-1/3 m-auto">
              <h2>ARTIST : {artist?.name}</h2>
              <div>
                pronoun : {artist?.gender ? artist.gender : 'undefined'}
              </div>
              <div>
                nationality :
                {artist?.nationality ? artist.nationality : 'undefined'}
              </div>
              <div>Biography : {artist?.bio ? artist.bio : 'undefined'} </div>
            </div>
          </div>
        </>
      }
    ></LayoutBlack>
  );
};

export default ArtistDetails;
