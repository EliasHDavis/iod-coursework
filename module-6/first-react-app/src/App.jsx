import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavBar from './NavBar'
import Footer from './Footer'
import { UserProvider } from './context/UserContext'






function App() {

  return (
    <>
    
      <UserProvider>
        <BrowserRouter>
        {/* <div id="mainContainer"> */}
          <NavBar />
          <AppRoutes />
        {/* </div> 
          <Footer />*/}
        </BrowserRouter>
      </UserProvider>

    </>
  )
}

export default App
