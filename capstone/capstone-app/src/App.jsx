import { BrowserRouter } from 'react-router-dom'
import './Styles/App.css'
import AppRoutes from './routes/AppRoutes'
import NavBar from './NavBar'
import Footer from './Footer'
import { UserProvider } from './UserContext'


function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <NavBar />
          <AppRoutes />
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
