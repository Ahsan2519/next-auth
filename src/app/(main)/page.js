"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Remove the access token by setting it to expire immediately
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    alert("You have been logged out.");

    router.push("/sign-in/login");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleLogout} className="cursor-pointer text-red-700">
        Logout
      </button>
    </div>
  );
};

export default Home;
