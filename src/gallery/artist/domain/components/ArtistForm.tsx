import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Box from '../../../../shared/components/Box';
import { IArtistForm } from '../types/artist.type';
import HsshButton from '../../../../shared/components/HsshButton';
import useFetchArtistDetails from '../hooks/fetchArtistDetails.hook';
import { updateArtistProfile } from '../services/Artist.services';
const ArtistForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IArtistForm>();

  const onSubmit = handleSubmit((data) => {
    console.log('data', data);
    updateArtistProfile('63f49fb1e385925cf0383947', data);
  });

  const { artist, isArtistLoading, error } = useFetchArtistDetails(
    // TODO add a valid id please
    '63f49fb1e385925cf0383947'
  );
  if (isArtistLoading) {
    return <h2 className="m-4">Loading...</h2>;
  } else if (error || !artist) {
    return <h2 className="m-4">Error...</h2>;
  }

  return (
    <>
      <div className="w-2/3 m-auto mt-6 overflow-auto">
        <Box
          childComponent={
            <>
              <h2 className="font-bold text-2xl mb-6">EDIT YOUR PROFILE</h2>
              <form onSubmit={onSubmit}>
                <div className="name mb-6">
                  <div className="mb-2">
                    <label className="text-lg">Your artist name :</label>
                  </div>
                  <div>
                    <input
                      {...register('name', { required: true, maxLength: 20 })}
                      type="text"
                      defaultValue={artist.name}
                      className="text-black w-1/2 p-2"
                    ></input>
                    <p className="mt-2 text-red-500">
                      {errors.name && <span>This field can not be empty</span>}
                    </p>
                  </div>
                </div>
                <div className="email mb-6">
                  <div className="mb-2">
                    <label className="text-lg">Your email :</label>
                  </div>
                  <div>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      defaultValue={artist.email}
                      className="text-black w-1/2 p-2"
                    ></input>
                    <p className="mt-2 text-red-500">
                      {errors.email && <span>This field can not be empty</span>}
                    </p>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="mb-2">
                    <label className="text-lg">Your password :</label>
                  </div>
                  <div className="password mb-6">
                    <input
                      {...register('password', {
                        required: true,
                        minLength: 8,
                      })}
                      className="text-black w-1/2 p-2"
                      type="password"
                      defaultValue={artist.password}
                    ></input>
                    <p className="mt-2 text-red-500">
                      {errors.password && (
                        <span>
                          This field is required with a minimum of 8 characters
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="country mb-6">
                  <div className="mb-2">
                    <label className="text-lg">
                      From which country do you work ?
                    </label>
                  </div>
                  <div>
                    <input
                      {...register('country', { maxLength: 20 })}
                      type="text"
                      className="text-black w-1/2 p-2"
                      defaultValue={artist?.country}
                    ></input>
                  </div>
                </div>
                <div className="pronouns mb-6">
                  <div className="mb-2">
                    <label className="text-lg">What are your pronouns ?</label>
                  </div>
                  <div>
                    <input
                      {...register('pronouns', { maxLength: 20 })}
                      type="text"
                      className="text-black w-1/2 p-2"
                      defaultValue={artist?.pronouns}
                    ></input>
                  </div>
                </div>
                <div className="bio mb-6">
                  <div className="mb-2">
                    <label className="text-lg">Add your biography :</label>
                  </div>
                  <div>
                    <textarea
                      {...register('bio')}
                      className="text-black w-full p-2 h-60"
                      defaultValue={artist?.bio}
                    ></textarea>
                  </div>
                </div>
                <div className="mt-8">
                  <HsshButton
                    childComponent={<input type="submit"></input>}
                    text={'SUBMIT'}
                  ></HsshButton>
                </div>
              </form>
              <div className="mt-8">
                <HsshButton
                  text={'VISIT YOUR PROFILE'}
                  onClick={() => navigate('../visit')}
                ></HsshButton>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};

export default ArtistForm;
