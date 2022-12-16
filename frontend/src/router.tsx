import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home/domain/page/Home.page';

const Router: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
