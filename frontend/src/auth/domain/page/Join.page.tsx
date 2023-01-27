import React from 'react';
import LayoutBlack from '../../../shared/components/LayoutBlack';

import { Outlet } from 'react-router-dom';

const Join: React.FC = () => {
  return (
    <LayoutBlack
      childComponent={
        <div className="w-screen h-screen relative">
          <Outlet />
        </div>
      }
    ></LayoutBlack>
  );
};

export default Join;
