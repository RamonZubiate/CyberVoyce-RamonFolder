import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { createContext, useState }from 'react'
import './App.css'

// PAGES
import SignUp from './pages/SignUp/SignUp';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import MyWallet from './pages/Wallet/MyWallet';
import Cybermarket from './pages/Cybermarket/Cybermarket';
import DirectMessages from './pages/DirectMessages/DirectMessages';
import Settings from './pages/Settings/Settings';

// COMPONENTS
import SharedLayout from './components/SharedLayout';

export const ThemeContext = createContext();


function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  if(theme === null){
    setTheme('dark');
  }

  return <BrowserRouter>
  <ThemeContext.Provider value = {{theme, setTheme}}>
    <Routes>
      <Route index element={<SignUp />}/>
      <Route path="cybervoyce" element={<SignUp />}/> {/* Sign up page */}
      <Route path="register" element={<Register/>}/> {/* Register page */}

      <Route path="" element={<SharedLayout />}> {/* Navbar shared layout (any page that includes the Navbar component should go in here)*/}
        <Route path="home" element={<Home />}/> {/* Home page */}
        <Route path="profile" element={<Profile />}/> {/* Profile page */}
        <Route path="my-wallet" element={<MyWallet />}/> {/* My Wallet page */}
        <Route path="cybermarket" element={<Cybermarket />}/> {/* Cybermarket page */}
        <Route path="settings" element={<Settings />}/> {/* Settings page */}
      </Route>

      <Route path="messages" element={<DirectMessages />}/> {/* DMs page */}
    </Routes>
  </ThemeContext.Provider>
  </BrowserRouter>
}

export default App;
