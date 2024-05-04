import React from "react";

import { useAuth } from "./AuthContext";
function UserProfile() {
  const { username } = useAuth();

  if (!username) {
    return null; 
  }

  return (
    <>
      <div className="flex items-center ml-6 mb-4">
        <img className="h-14 mr-2" src="/profile.svg" alt="Profile Icon" />
        <div className="">{username}</div>
      </div>
    </>
  );
}

export default UserProfile;
