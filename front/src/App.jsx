
import './reset.css'
import Navbar from './components/Navbar/Navbar'
import Home from '../views/Home/Home'
import MyAppointments from '../views/MisTurnos/MisTurnos'
import Login from '../views/Login/Login'
import Register from '../views/Register/Register'
import Nosotros from '../views/Nosotros/Nosotros'
import Contacto from '../views/Contacto/Contacto'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/misturnos' element={<MyAppointments />}/>
        <Route path='/acercade' element={<Nosotros />}/>
        <Route path='/contact' element={<Contacto />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
