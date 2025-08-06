
import { SignIn } from './components/Signin'
import { SignUp } from './components/SignUp'
import './index.css'
import { Home } from './pages/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
