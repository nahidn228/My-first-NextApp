// app/protected/page.tsx
"use client"; // Ensure this component is rendered client-side

import { LoginLink, useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";

export default function Admin() {
  const { isAuthenticated, isLoading } = useKindeAuth();

  // Show a loading state while authentication is in progress
  if (isLoading) return <div>Loading...</div>;

  // Conditionally render the content based on authentication state
  return isAuthenticated ? (
    <div className=" flex items-center justify-center py-20">
      <h2 className="text-2xl text-center font-mono">
        "Welcome to your profile!".
      </h2>
    </div>
  ) : (
    <div>
      You have to{" "}
      <LoginLink className="text-blue-500 font-medium">Login</LoginLink> to see
      this page
    </div>
  );
}
