import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

const Protected = ({ children }: { children: JSX.Element }) => {
  const { id } = useParams();
  if (id !== localStorage.artistId) {
    return <Navigate to="/home" replace />;
  }
  return children;
};

export default Protected;
