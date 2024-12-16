import LoginForm from './compnents/LoginForm';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center m-4">
       <h1 className="text-6xl my-3">
        Hey, It's time for login
       </h1>
       <LoginForm/>
    </div>
  );
  }