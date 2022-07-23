import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import "./App.css";
import { auth, db } from './backend/Firebase'
import { doc } from 'firebase/firestore';
import Header from "./components/Header/Header";
import Landing from "./containers/Landing/Landing";
import Login from "./containers/Auth/Login/Login";
import Signup from "./containers/Auth/Signup/Signup";
import Map from "./containers/Map/Map";
import Profile from "./containers/Profile/Profile";
import UserContext from './components/UserContext';
import MyPets from "./containers/MyPets/MyPets";

function App() {
  // the currently authenticated user, if there is one
  const [authUser, authLoading, authError] = useAuthState(auth)
  // when the logged in user changes, retrieve user doc and set it
  const [user, userLoading, userError] = useDocumentData(
    authUser ? doc(db, 'users', authUser.uid) : undefined
  )


  return (
    <UserContext.Provider value={user}>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile"element=
          {user ? <Profile /> : <Navigate to="/login" replace />} 
        />
        <Route path="/map" element=
          {user ? <Map /> : <Navigate to="/login" replace />}
        />
        <Route path="/my-pets" element=
          {user ? <MyPets /> : <Navigate to="/login" replace />} 
        />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
