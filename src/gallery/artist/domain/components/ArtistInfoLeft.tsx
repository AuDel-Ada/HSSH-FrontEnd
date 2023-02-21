import React from 'react';

import type { IArtistComponents } from '../types/artist.type';
import Box from '../../../../shared/components/Box';

const ArtistInfoLeft: React.FC<IArtistComponents> = (props) => {
  return (
    <>
      <Box
        childComponent={
          <div>
            <h2 className="text-7xl font-bold mb-4">{props.artist.name}</h2>
            <div className="text-lg italic mb-4">
              Pronouns :
              {props.artist.pronouns ? props.artist.pronouns : ' undefined'}
            </div>
            <div className="text-lg mb-4">
              <i className="fa-solid fa-location-dot mr-2"></i>
              <span>
                {props.artist.country ? props.artist.country : ' undefined'}
              </span>
            </div>
            <div className="text-lg">
              <div className="mb-4 font-bold">BIOGRAPHY</div>
              <div className="text-justify">
                {props.artist.bio ? props.artist.bio : ' undefined'}{' '}
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default ArtistInfoLeft;
