
import './App.css'
import { BrowserRouter , Route , Routes} from "react-router-dom"
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'


import { Toaster } from 'react-hot-toast'
import HomePage from './pages/HomePage'



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/home' element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
    <Toaster/>

    </>
  )
}

export default App
