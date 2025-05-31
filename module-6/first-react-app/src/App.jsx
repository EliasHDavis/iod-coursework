import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Greeting} from './Greeting'
import {BigCats} from './BigCats'
import { Emoji } from './Emoji'
import { AddCat } from './BIgCatsForm'
import { BitcoinRates } from './BitcoinRates'
import { EmojiProvider } from './EmojiContext'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import NavBar from './NavBar'
import { UserProvider } from './context/UserContext'






function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Greeting name='Josh'/>
      <Emoji /> 
      <BigCats /> 
      <EmojiProvider>
        <BitcoinRates/>
      </EmojiProvider>
      */}
      <UserProvider>
        <BrowserRouter>
          <NavBar/>
          <AppRoutes/>
        </BrowserRouter>
      </UserProvider>

    </>
  )
}

export default App
