import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import NotificationsPage from './pages/NotificationsPage.jsx';
import CallPage from './pages/CallPage.jsx';
import ChatPage from './pages/ChatPage.jsx';
import OnboardingPage from './pages/OnboardingPage.jsx';
import  { Toaster } from 'react-hot-toast';  
import PageLoader from './components/PageLoader.jsx';
import useAuthuser from './hooks/useAuthuser.js';

const App = () => {

  const {isLoading,authUser} = useAuthuser();
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;

  if(isLoading) return <PageLoader/>;
  
  return <div className=" h-screen" data-theme ="coffee">
      <Routes>
      <Route path="/" element={isAuthenticated && isOnboarded ? (
        <HomePage/>
        ): (<Navigate to={!isAuthenticated ? "/login" : "onboarding"}/>
        )
        }
        />
      <Route path="/signup" element={!isAuthenticated ? <SignUpPage/> : <Navigate to="/"/>}/>
      <Route path="/login" element={!isAuthenticated ? <LoginPage/>: <Navigate to="/"/>}/>
      <Route path="/notifications" element={isAuthenticated? <NotificationsPage/>: <Navigate to="/login"/>}/>
      <Route path="/call" element={isAuthenticated? <CallPage/> : <Navigate to="/login"/>}/>
      <Route path="/chat" element={isAuthenticated? <ChatPage/> : <Navigate to="/login"/>}/>
      <Route path="/onboarding" element={isAuthenticated? <OnboardingPage/> : <Navigate to="/login"/>}/>

      </Routes>
      <Toaster/>
      </div>;
};

export default App