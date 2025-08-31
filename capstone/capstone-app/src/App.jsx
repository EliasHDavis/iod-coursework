import { BrowserRouter } from 'react-router-dom'
import './Styles/App.css'
import AppRoutes from './routes/AppRoutes'
import NavBar from './NavBar'
import Footer from './Footer'
import { UserProvider } from './UserContext'
import { ChartProvider } from './ChartContext'


function App() {

  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <ChartProvider>
            <NavBar />
            <AppRoutes />
            <Footer />
          </ChartProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  )
}

export default App
