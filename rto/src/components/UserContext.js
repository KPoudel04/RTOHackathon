import React from 'react'
import { User } from '../backend/User'

// User context, used to make current user accessible from anywhere.
// null should be used if the user is not logged in
const UserContext = React.createContext(new User())

export default UserContext

/* Use the following code in a child component to get access to a user

// get the user from the context
  const user = useContext(UserContext)
  if (user === null) {
    // put any logic here for when the user is not signed in
  } else {
    // user is signed in and can be accessed with "user" variable
  }

*/