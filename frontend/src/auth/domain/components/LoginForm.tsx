import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, NavLink } from 'react-router-dom';
import Box from '../../../shared/components/Box';
import HsshButton from '../../../shared/components/HsshButton';
import type { AuthFormInput } from '../types/auth.type';

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormInput>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="w-1/3 m-auto mt-32">
      <Box
        childComponent={
          <>
            <h1 className="text-2xl font-bold mb-6 text-center">
              Connect to your account
            </h1>
            <form onSubmit={onSubmit}>
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
                    {...register('password', { required: true })}
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
                <a className="text-sm cursor-pointer underline underline-offset-8">
                  Forgot password ?
                </a>
              </div>
              <div className="mt-4">
                <span className="text-sm">
                  You do not have an account yet ? Click&nbsp;
                  <Link
                    to="../sign-in"
                    className="cursor-pointer underline underline-offset-8"
                  >
                    here
                  </Link>
                  &nbsp;to register.
                </span>
              </div>
            </div>
          </>
        }
      ></Box>
    </div>
  );
};

export default LoginForm;
