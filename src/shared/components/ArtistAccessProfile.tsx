import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArtistAccessProfile: React.FC = () => {
  const [isDropdownMenuDisplayed, setDropdownMenu] = useState(false);

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
          <button className="m-3" onClick={() => console.log('logout action')}>
            LOGOUT
          </button>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-slate-50">
          <div className="m-3">
            <Link to={'#'}>EDIT MY PROFILE</Link>
          </div>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-slate-50">
          <div className="m-3">
            <Link to={'#'}>VISIT MY PROFILE</Link>
          </div>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer hover:bg-black hover:text-slate-50">
          <div className="m-3">
            <Link to={'#'}> ADD A NFT</Link>
          </div>
        </div>
        <div className="border-solid border-2 border-black cursor-pointer text-red-500 hover:bg-red-500 hover:text-slate-50">
          <button
            className="m-3"
            onClick={() => console.log('delete account action')}
          >
            KILL MY ACCOUNT
          </button>
        </div>
      </div>
    </>
  );
};

export default ArtistAccessProfile;
