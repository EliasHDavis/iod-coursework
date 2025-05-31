import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './Footer'
import { NavBar } from './NavBar'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar className='NavBar'/>
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
