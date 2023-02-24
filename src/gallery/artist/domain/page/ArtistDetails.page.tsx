import React from 'react';
import { Outlet } from 'react-router-dom';

import LayoutBlack from '../../../../shared/components/LayoutBlack';
import Header from '../../../../shared/components/Header';

const ArtistDetails: React.FC = () => {
  return (
    <LayoutBlack
      childComponent={
        <div className="w-screen h-screen overflow-auto">
          <Header />
          <Outlet />
        </div>
      }
    ></LayoutBlack>
  );
};

export default ArtistDetails;
