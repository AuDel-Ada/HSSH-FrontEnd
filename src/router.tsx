import { Route, Routes } from 'react-router-dom';
import React from 'react';

import Home from './home/domain/page/Home.page';
import Join from './auth/domain/page/Join.page';
import SignUpForm from './auth/domain/components/SignUpForm';
import LoginForm from './auth/domain/components/LoginForm';
import ArtistDetails from './gallery/artist/domain/page/ArtistDetails.page';
import ArtistInfo from './gallery/artist/domain/components/ArtistInfo';
import ArtistForm from './gallery/artist/domain/components/ArtistForm';
import Protected from './shared/components/Protected';

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
        <Route path="/artist/:id" element={<ArtistDetails />}>
          <Route path="visit" element={<ArtistInfo />}></Route>
          <Route
            path="edit"
            element={
              <Protected>
                <ArtistForm></ArtistForm>
              </Protected>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
