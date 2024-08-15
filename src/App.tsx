import Navbar from "./components/Navbar"

import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Aboutus from "./pages/Aboutus"
import Socials from "./pages/Socials"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import ThankYou from "./pages/ThankYou"
import Signin from "./pages/Signin"

function App() {
 

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AboutUs" element={<Aboutus/>}></Route>
      <Route path="/socials" element={<Socials/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/thanks" element={<ThankYou/>}></Route>
      <Route path="/signin" element={<Signin/>}></Route>
      
    </Routes>
      
    </>
  )
}

export default App
