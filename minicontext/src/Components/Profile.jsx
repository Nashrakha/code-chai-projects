import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {

    const { user } = useContext(UserContext);

    if (!user) return <h3>Please Login</h3>

    return <h2>Welcome {user.userName}</h2>
}

export default Profile