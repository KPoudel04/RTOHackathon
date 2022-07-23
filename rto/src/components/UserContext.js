import React from 'react'

// User context, used to make current user accessible from anywhere.
// null should be used if the user is not logged in
const UserContext = React.createContext(null)

export default UserContext

/* Use the following code in a child component to get access to a user

// get the user from the context
  const user = useContext(UserContext)
  if (user === null) {
    throw new Error('No user logged in')
  }

*/