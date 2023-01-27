import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './home/domain/page/Home.page';
import Gallery from './gallery/domain/page/Gallery.page';
import Join from './auth/domain/page/Join.page';
import SignInForm from './auth/domain/components/SignInForm';
import LoginForm from './auth/domain/components/LoginForm';

const Router: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join" element={<Join />}>
          <Route path="sign-in" element={<SignInForm />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
