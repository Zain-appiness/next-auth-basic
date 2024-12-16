'use server';

import { signIn, signOut } from "next-auth/react";

export async function doSocialLogin(action) {
  try {
    await signIn(action, { callbackUrl: "/home" }); // Use 'callbackUrl' for redirection
    console.log(`Social login action: ${action}`);
  } catch (error) {
    console.error("Error during social login:", error);
  }
}

export async function doLogout() {
  try {
    await signOut({ callbackUrl: "/" }); // Redirect to the homepage or login page
    console.log("User successfully logged out.");
  } catch (error) {
    console.error("Error during logout:", error);
  }
}
