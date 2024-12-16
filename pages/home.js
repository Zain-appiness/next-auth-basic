import React from 'react';
import { getServerSession } from "next-auth/next";
import authOptions from "./auth";
import Image from 'next/image';
import Logout from './compnents/Logout';


export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

const HomePage = ({ session }) => {
  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">{session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={72}
        height={72}
        className="rounded-full"
      />
      <Logout/>
    </div>
  );
};

export default HomePage;
