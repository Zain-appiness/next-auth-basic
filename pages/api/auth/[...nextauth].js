import NextAuth from "next-auth";
import authOptions from "../../../lib/auth"; // Import the configuration

export default NextAuth(authOptions);
