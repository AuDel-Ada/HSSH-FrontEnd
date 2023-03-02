import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Box from '../../../shared/components/Box';
import HsshButton from '../../../shared/components/HsshButton';
import { IAuthFormInput } from '../types/auth.type';
import useSignUpArtist from '../hooks/signUpArtist';

const SignUpForm: React.FC = () => {
  const strongPasswordPattern = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
  );
  const passwordErrorMessage =
    'Password is required with stronger security. Check recommendations below.';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAuthFormInput>();

  const { createNewArtist } = useSignUpArtist();

  const onSubmit = handleSubmit((data) => {
    createNewArtist.mutate(data);
  });

  return (
    <div className="w-full m-auto mt-24 md:w-1/3">
      <Box
        childComponent={
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Sign up</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <div className="mb-2">
                  <label className="text-lg">Your name :</label>
                </div>
                <div>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className="text-black w-full p-2"
                  ></input>
                  <p className="mt-2 text-red-500">
                    {errors.name && <span>This field is required</span>}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-2">
                  <label className="text-lg">Your email :</label>
                </div>
                <div>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="text-black w-full p-2"
                  ></input>
                  <p className="mt-2 text-red-500">
                    {errors.email && <span>This field is required</span>}
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-4">
                  <div className="mb-2">
                    <label className="text-lg">Your password :</label>
                  </div>
                  <input
                    {...register('password', {
                      required: true,
                      minLength: 8,
                      pattern: {
                        value: strongPasswordPattern,
                        message: passwordErrorMessage,
                      },
                    })}
                    className="text-black w-full p-2"
                    type="password"
                  ></input>
                  <p className="mt-2 text-red-500">
                    {errors.password && <span>{passwordErrorMessage}</span>}
                  </p>
                </div>

                <div className="password-security">
                  <p>
                    <i className="fa-solid fa-exclamation"></i> The password is
                    at least 8 characters long.
                    <br /> <i className="fa-solid fa-exclamation"></i> The
                    password has at least one uppercase letter.
                    <br /> <i className="fa-solid fa-exclamation"></i> The
                    password has at least one lowercase letter.
                    <br />
                    <i className="fa-solid fa-exclamation"></i> The password has
                    at least one digit.
                    <br /> <i className="fa-solid fa-exclamation"></i> The
                    password has at least one special character.
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
            <div className="text-center mt-6">
              <div className="mt-4">
                <span className="text-sm">
                  You have already an account ? Click&nbsp;
                  <Link
                    to="../login"
                    className="cursor-pointer underline underline-offset-8"
                  >
                    here
                  </Link>
                  &nbsp;to connect.
                </span>
              </div>
            </div>
          </>
        }
      ></Box>
    </div>
  );
};

export default SignUpForm;
