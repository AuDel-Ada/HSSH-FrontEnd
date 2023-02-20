import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home/domain/page/Home.page';
import Join from './auth/domain/page/Join.page';
import SignUpForm from './auth/domain/components/SignUpForm';
import LoginForm from './auth/domain/components/LoginForm';
import ArtistDetails from './gallery/artist/domain/page/ArtistDetails.page';

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<Join />}>
          <Route path="sign-in" element={<SignUpForm />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
        </Route>
        <Route path="/artist/:id" element={<ArtistDetails />}></Route>
      </Routes>
    </div>
  );
};

export default Router;
