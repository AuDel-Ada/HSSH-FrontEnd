import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Box from '../../../shared/components/Box';
import HsshButton from '../../../shared/components/HsshButton';
import type { AuthFormInput } from '../types/auth.type';

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInput>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="w-1/3 m-auto mt-52">
      <Box
        childComponent={
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <div className="mb-2">
                  <label className="text-lg">Your pseudo :</label>
                </div>
                <div>
                  <input
                    {...register('pseudo', { required: true, maxLength: 20 })}
                    type="text"
                    className="text-black w-full p-2"
                  ></input>
                  <p> {errors.pseudo && <span>This field is required</span>}</p>
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
                  <p> {errors.email && <span>This field is required</span>}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="mb-2">
                  <label className="text-lg">Your password :</label>
                </div>
                <div>
                  <input
                    {...register('password', {
                      required: true,
                      minLength: 8,
                      maxLength: 20,
                    })}
                    className="text-black w-full p-2"
                    type="password"
                  ></input>
                  <p>
                    {' '}
                    {errors.password && <span>This field is required</span>}
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

export default SignInForm;
