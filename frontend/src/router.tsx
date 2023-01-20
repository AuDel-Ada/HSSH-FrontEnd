import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home/domain/page/Home.page';
import Gallery from './gallery/domain/page/Gallery.page';

const Router: React.FC = () => {
  return (
    <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
    </div>
  );
};

export default Router;
