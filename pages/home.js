import React from 'react';
import { getServerSession } from "next-auth/next";
import authOptions from "../lib/auth";
import Logout from './compnent/Logout';
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

// Server-side session check
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

// Utility function to generate initials
const getInitials = (name, email) => {
  if (name) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase(); // Extracts first letters of each word
  } else if (email) {
    return email[0].toUpperCase(); // Fallback: first letter of email
  }
  return "U"; // Default: If both name and email are missing
};

const HomePage = ({ session }) => {
  const userName = session?.user?.name;
  const userEmail = session?.user?.email;
  const userImage = session?.user?.image;

  return (
    <div className="flex flex-col items-center m-8">
      <h1 className="text-5xl font-bold my-4">{userName || userEmail}</h1>
      <Avatar className="w-32 h-32">
        <AvatarImage src={userImage} alt="User Avatar" />
        <AvatarFallback className="text-4xl">{getInitials(userName, userEmail)}</AvatarFallback>
      </Avatar>
      <Logout />
    </div>
  );
};

export default HomePage;
