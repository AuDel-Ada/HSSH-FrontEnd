import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Box from '../../../../shared/components/Box';
import HsshButton from '../../../../shared/components/HsshButton';
import { IAddNftForm } from '../types/artist.type';
import useUpdateArtistDetails from '../hooks/updateArtistDetails.hooks';

const AddNftForm: React.FC = () => {
  const { id } = useParams();
  const { updateArtistDetails } = useUpdateArtistDetails();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddNftForm>();

  const onSubmit = handleSubmit((data: IAddNftForm) => {
    const params = {
      artistId: id as string,
      artistDetails: data,
    };
    updateArtistDetails.mutate(params);
  });
  return (
    <div className="w-full m-auto mt-24 md:w-1/3">
      <Box
        childComponent={
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Add your nft
            </h2>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <div className="mb-2">
                  <label className="text-lg">Smart Contrat n° :</label>
                </div>
                <div>
                  <input
                    {...register('smartContractNumber', { required: true })}
                    type="string"
                    className="text-black w-full p-2"
                  ></input>
                  <p className="mt-2 text-red-500">
                    {errors.smartContractNumber && (
                      <span>This field is required</span>
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <HsshButton
                  childComponent={<input type="submit"></input>}
                  text={'SUBMIT'}
                ></HsshButton>
              </div>
            </form>
          </>
        }
      ></Box>
    </div>
  );
};

export default AddNftForm;
