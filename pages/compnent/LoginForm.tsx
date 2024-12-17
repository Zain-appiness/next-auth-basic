import React from 'react';
import { doSocialLogin } from '../../lib/index';
import { Button } from '../../components/ui/button';
import { MailOpen } from "lucide-react"

const LoginForm = () => {
  const handleLogin = async (action: string) => {
    await doSocialLogin(action);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        className="bg-blue-500 text-white p-6 rounded-md m-3 text-lg"
        type="button"
        onClick={() => handleLogin('google')}
      >
        <MailOpen />Sign In With Google
      </Button>

      <Button
        className="bg-pink-500 text-white p-6 rounded-md m-3 text-lg"
        type="button"
        onClick={() => handleLogin('github')}
      >
        <MailOpen /> Sign In With GitHub
      </Button>
    </form>
  );
};

export default LoginForm;
