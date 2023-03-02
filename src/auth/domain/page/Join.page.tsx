import React from 'react';
import LayoutBlack from '../../../shared/components/LayoutBlack';

import { Outlet } from 'react-router-dom';
import Header from '../../../shared/components/Header';

const Join: React.FC = () => {
  return (
    <LayoutBlack
      childComponent={
        <>
          <Header />
          <div className="w-screen h-screen overflow-auto">
            <Outlet />
          </div>
        </>
      }
    ></LayoutBlack>
  );
};

export default Join;
