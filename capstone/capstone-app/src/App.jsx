import { BrowserRouter } from 'react-router-dom'
import './Styles/App.css'
import AppRoutes from './routes/AppRoutes'
import NavBar from './NavBar'
import Footer from './Footer'


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
