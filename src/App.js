import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React, { createContext, useState }from 'react'
import './App.css'

// PAGES
import SignUp from './pages/SignUp';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import MyWallet from './pages/MyWallet';
import Cybermarket from './pages/Cybermarket';
import DirectMessages from './pages/DirectMessages';

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
      </Route>

      <Route path="messages" element={<DirectMessages />}/> {/* DMs page */}
    </Routes>
    </ThemeContext.Provider>
  </BrowserRouter>
}

export default App;
