import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import useLogoutArtist from '../../auth/domain/hooks/logoutArtist';

const ArtistAccessProfile: React.FC = () => {
  const id = localStorage.artistId;

  const [isDropdownMenuDisplayed, setDropdownMenu] = useState(false);

  const { logout } = useLogoutArtist();

  const navigate = useNavigate();

  if (!isDropdownMenuDisplayed) {
    return (
      <button onClick={() => setDropdownMenu(!isDropdownMenuDisplayed)}>
        <i className="fa-solid fa-user text-2xl"></i>
      </button>
    );
  }
  return (
    <>
      <button onClick={() => setDropdownMenu(!isDropdownMenuDisplayed)}>
        <i className="fa-solid fa-user text-2xl relative"></i>
      </button>
      <div
        className="absolute bg-slate-50 text-black left-0 top-52 w-2/12 ml-4"
        onMouseLeave={() => setDropdownMenu(false)}
      >
        <div className="border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-slate-50">
          <button className="m-3" onClick={() => logout()}>
            LOGOUT
          </button>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-slate-50">
          <button
            className="m-3"
            onClick={() => navigate(`../artist/${id}/edit`)}
          >
            EDIT MY PROFILE
          </button>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-slate-50">
          <button
            className="m-3"
            onClick={() => navigate(`../artist/${id}/visit`)}
          >
            VISIT MY PROFILE
          </button>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-slate-50">
          <button
            className="m-3"
            onClick={() => navigate(`../artist/${id}/add-nft`)}
          >
            ADD A NFT
          </button>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer text-red-500 hover:bg-red-500 hover:text-slate-50">
          <button
            className="m-3"
            onClick={() => navigate(`../artist/${id}/delete`)}
          >
            KILL MY ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
};

export default ArtistAccessProfile;
