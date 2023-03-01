import { useNavigate } from 'react-router-dom';

const useLogoutArtist = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/join/login', { replace: true });
  };

  return { logout };
};

export default useLogoutArtist;
