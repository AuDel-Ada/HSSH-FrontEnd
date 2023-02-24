import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Box from '../../../../shared/components/Box';
import { IArtistForm } from '../types/artist.type';
import HsshButton from '../../../../shared/components/HsshButton';
import useFetchArtistDetails from '../hooks/fetchArtistDetails.hook';
import useUpdateArtistDetails from '../hooks/updateArtistDetails.hooks';

const ArtistForm: React.FC = () => {
  const DEFAULT_ID = '63f49fb1e385925cf0383947';
  const navigate = useNavigate();

  const { artist, isArtistLoading, error } = useFetchArtistDetails(
    // TODO add a valid id please
    DEFAULT_ID
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IArtistForm>();

  const { updateArtistDetails } = useUpdateArtistDetails();

  const onSubmit = handleSubmit((data) => {
    const params = {
      artistId: DEFAULT_ID,
      artistDetails: data,
    };
    updateArtistDetails.mutate(params);
  });

  if (isArtistLoading) {
    return <h2 className="m-4">Loading...</h2>;
  } else if (error || !artist) {
    return <h2 className="m-4">Error...</h2>;
  }

  return (
    <>
      <div className="w-full md:w-2/3 m-auto mt-6 ">
        <Box
          childComponent={
            <>
              <h2 className="font-bold text-2xl mb-8 text-center">
                EDIT YOUR PROFILE
              </h2>
              <form onSubmit={onSubmit}>
                <div className="name mb-6">
                  <div className="mb-2">
                    <label className="text-lg">Your artist name :</label>
                  </div>
                  <div>
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      defaultValue={artist.name}
                      className="text-black p-2 w-full"
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
                      className="text-black w-full p-2"
                    ></input>
                    <p className="mt-2 text-red-500">
                      {errors.email && <span>This field can not be empty</span>}
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
                      {...register('country')}
                      type="text"
                      className="text-black p-2 w-full"
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
                      {...register('pronouns')}
                      type="text"
                      className="text-black p-2 w-full"
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
                      className="text-black w-full p-2 h-80"
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
