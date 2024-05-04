import React from 'react'

import { useAuth } from "./AuthContext";

function UserProfile() {
    const { username } = useAuth();

    return <div>Welcome, {username}!</div>;
}

export default UserProfile