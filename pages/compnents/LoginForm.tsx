import React from 'react';
import { doSocialLogin } from '../../lib/index';

const LoginForm = () => {
  const handleLogin = async (action: string) => {
    await doSocialLogin(action);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <button
        className="bg-blue-500 text-white p-5 rounded-md m-3 text-lg"
        type="button"
        onClick={() => handleLogin('google')}
      >
        Sign In With Google
      </button>

      <button
        className="bg-pink-500 text-white p-5 rounded-md m-3 text-lg"
        type="button"
        onClick={() => handleLogin('github')}
      >
        Sign In With GitHub
      </button>
    </form>
  );
};

export default LoginForm;
