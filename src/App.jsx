import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';
import { feedPost } from './store/postSlice';
import service from "./appwrite/config";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.auth.status); // Listening for status changes
  const post =  useSelector((state) => state.post.allposts);

  useEffect(() => {
    console.log("App component rendered or status changed");

    // Fetch the current user and posts whenever the status changes
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
          service.getPosts().then((posts) => {
            console.log(posts);
            dispatch(feedPost({ posts }));
          });
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [ status,post]); // Trigger effect when status changes

  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-400'>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
