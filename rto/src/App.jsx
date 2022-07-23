import React from "react";
import { Routes, Route } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import "./App.css";
import { auth, db } from './Firebase'
import { doc } from 'firebase/firestore';
import Header from "./components/Header/Header";
import Landing from "./containers/Landing/Landing";
import Login from "./containers/Auth/Login/Login";
import Signup from "./containers/Auth/Signup/Signup";
import Map from "./containers/Map/Map";
import Profile from "./containers/Profile/Profile";

function App() {
  // the currently authenticated user, if there is one
  const [authUser, authLoading, authError] = useAuthState(auth)
  // when the logged in user changes, retrieve user doc and set it
  const [user, userLoading, userError] = useDocumentData(
    authUser ? doc(db, 'users', authUser.uid) : undefined
  )

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </>
  );
}

export default App;
