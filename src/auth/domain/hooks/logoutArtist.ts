import { useNavigate } from 'react-router-dom';

const useLogoutArtist = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('../join/login');
  };

  return { logout };
};

export default useLogoutArtist;
