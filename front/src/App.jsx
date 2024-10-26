
import './reset.css'
import Navbar from './components/Navbar/Navbar'
import Home from '../views/Home/Home'
import MyAppointments from '../views/MisTurnos/MisTurnos'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <MyAppointments/>
      <Login />
      <Register />
    </>
  )
}

export default App
