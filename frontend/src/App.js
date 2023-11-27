import './App.css';
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/additional/Loader'
import Mentorssignup from './components/mentor/Mentorssignup';
import MentorLogin from './components/mentor/MentorLogin'

// using LazyLoader for codesplitting - intial loading faster ( lazy() + <Suspense> ) */}

const Userlogin = lazy(() => import('./components/Userlogin'));
const Usersignup = lazy(() => import('./components/Usersignup'));
const Home = lazy(() => import('./components/Home'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const Adminlogin = lazy(() => import('./components/admin/Adminlogin'));
const AdminHome = lazy(() => import('./components/admin/Adminhome'));
const AdminProfile = lazy(() => import('./components/admin/AdminProfile'));
const Create = lazy(() => import('./components/admin/Create'));
const EditUser = lazy(() => import('./components/admin/EditUser'));
const DeleteUser = lazy(() => import('./components/admin/DeleteUser'));


const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return loading ? <Loader /> : children;
};

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Suspense >
          <Routes>
            {/* user routes */}
            <Route path="/login" element={<Userlogin />} />
            <Route path="/" element={<Usersignup />} />
            <Route path="/home" element={<LoaderWrapper><Home /></LoaderWrapper>} />
            <Route path="/user-profile" element={<UserProfile />} />

            {/* admin routes */}
            <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/admin-profile" element={<AdminProfile />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/delete/:id" element={<DeleteUser />} />

            {/* {mentor routes} */}
            <Route path="/mentorsignup" element={<Mentorssignup />} />
            <Route path="/mentorlogin" element={<MentorLogin />} />
          </Routes>
        </Suspense>

      </div>
    </BrowserRouter>
  );
}

export default App;
