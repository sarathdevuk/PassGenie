
import './App.css'
import LoginPage from './pages/LoginPage'
import { BrowserRouter , Route , Routes} from "react-router-dom"
// import { Toaster } from 'react-hot-toast'



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<LoginPage/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
