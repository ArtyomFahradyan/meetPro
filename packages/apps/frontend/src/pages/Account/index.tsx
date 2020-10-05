import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Grid } from 'antd';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import { AccountWrapper } from './styles';
const { useBreakpoint } = Grid;

const variants = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

function Account() {
  const location = useLocation();
  const screens = useBreakpoint();

  // It would be great if we could use AnimatePresence here to animate the routes exiting,
  // but it is currently incompatible with React Router v6
  return (
    <AccountWrapper
      variants={variants}
      initial="out"
      animate="in"
      key={location.pathname}
      $breakpoints={screens}
    >
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forgot" element={<ForgotPassword />} />
      </Routes>
    </AccountWrapper>
  );
}

export default Account;
