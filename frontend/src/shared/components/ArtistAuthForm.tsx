import React, { useState } from 'react';
import HsshButton from './HsshButton';

const ArtistAuthForm: React.FC = () => {
  const [isAuthDisplayed, toggleAuth] = useState(false);
  const [showArtistAction, toggleArtistAction] = useState(false);
  const [isArtistLoggedIn, setArtistConnection] = useState(false);
  const [artistEmail, setArtistEmail] = useState('');
  const [artistPassword, setArtistPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (artistEmail !== '' && artistPassword !== '') {
      toggleAuth(false);
      setArtistConnection(true);
    }
  };

  const handleLogoutButton = () => {
    setArtistConnection(false);
  };

  const handleClick = () => {
    if (isArtistLoggedIn && showArtistAction) {
      toggleAuth(false);
      toggleArtistAction(false);
    } else if (isArtistLoggedIn) {
      toggleArtistAction(true);
    } else {
      toggleAuth(!isAuthDisplayed);
    }
  };

  if (isAuthDisplayed) {
    return (
      <form onSubmit={handleSubmit} className="flex items-center">
        <button onClick={handleClick} className="mr-4">
          <i className="fa-solid fa-palette text-lg"></i>
        </button>
        <div className="mr-4">
          <label className="mr-2">Email</label>
          <input
            className="text-black p-1"
            type="mail"
            placeholder="email adress"
            onChange={(e) => setArtistEmail(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label className="mr-2">Password</label>
          <input
            className="text-black p-1"
            type="password"
            placeholder="password"
            onChange={(e) => setArtistPassword(e.target.value)}
            required
          ></input>
        </div>
        <HsshButton text={'SUBMIT'} />
      </form>
    );
  } else if (isArtistLoggedIn && showArtistAction) {
    return (
      <div>
        <button onClick={handleClick} className="mr-4">
          <i className="fa-solid fa-palette text-lg"></i>
        </button>
        <HsshButton text={'LOGOUT'} onClick={handleLogoutButton} />
        <HsshButton text={'MY SPACE'} />
      </div>
    );
  } else {
    return (
      <button onClick={handleClick} className="mr-4">
        <i className="fa-solid fa-palette text-lg"></i>
      </button>
    );
  }
};

export default ArtistAuthForm;