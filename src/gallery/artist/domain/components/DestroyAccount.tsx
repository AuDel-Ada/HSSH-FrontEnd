import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '../../../../shared/components/Box';
import useDeleteArtistAccount from '../hooks/deleteArtistAccount.hooks';

const DestroyAccount: React.FC = () => {
  const { deleteArtistAction } = useDeleteArtistAccount();
  const navigate = useNavigate();

  return (
    <div className="w-full m-auto mt-24 md:w-1/3 text-lg">
      <Box
        childComponent={
          <div>
            <h2 className="font-bold text-2xl mb-6 text-center">
              <i className="fa-solid fa-skull-crossbones mr-3"></i>
              KILL MY ACCOUNT
              <i className="fa-solid fa-skull-crossbones ml-3"></i>
            </h2>
            <div>
              Are you sure you want to
              <strong className="font-bold"> delete</strong> your account ? This
              action will be irreversible and will result in the deletion of all
              your datas and access to the
              <strong className="font-bold"> HOUSESHOW GALLERY</strong> Artist
              service.
            </div>
            {/* TODO refacto to use HSSH button */}
            <div className="flex justify-end mt-6">
              <div className="border-solid border-2 border-slate-50 cursor-pointer text-slate-50 mr-3 hover:bg-slate-50 hover:text-black">
                <button
                  className="m-3"
                  onClick={() => navigate('/home', { replace: true })}
                >
                  CANCEL
                </button>
              </div>
              <div className="border-solid border-2 border-slate-50 cursor-pointer bg-red-500 hover:text-red-500 hover:bg-slate-50">
                <button
                  className="m-3"
                  onClick={() =>
                    deleteArtistAction.mutate(localStorage.artistId)
                  }
                >
                  CONFIRM
                </button>
              </div>
            </div>
          </div>
        }
      ></Box>
    </div>
  );
};

export default DestroyAccount;
