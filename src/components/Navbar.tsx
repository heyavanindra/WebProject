
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
    const [nav,setNav]= useState(true)

    const handlenav = ()=>{
    setNav(!nav)
    }
  return (
    <div className='flex justify-between w-full items-center h-24 ml-auto px-4 text-white  shadow-slate-700 shadow-sm md:shadow-none'>
        <Link to={'/'} className="cursor-pointer"><h1 className="w-full text-3xl font-bold text-[#4f6dc0]">REACT</h1></Link>
        <ul className="hidden md:flex">
            <li className="p-4 hover:scale-105 duration-300"><Link to={'/'}>Home</Link></li>
            <li className="p-4 hover:scale-105 duration-300"><Link to={'/AboutUs'}>
            About Us
            </Link></li>
            <li className="p-4 hover:scale-105 duration-300"><Link to={'/contact'}>contact</Link></li>
            <li className="p-4 hover:scale-105 duration-300"><Link to={'/socials'}>Socials</Link></li>
        </ul>
        <button className="hidden md:block md:bg-[#4f6dc0] w-[200px] rounded-xl font-medium my-6  py-3 text-black hover:scale-105 duration-300">
    <Link to={'/signin'}>Sign in</Link>
</button>

        <div onClick={handlenav} className="block bg-[#121212] cursor-pointer md:hidden">
            {!nav ? <AiOutlineClose size={20}></AiOutlineClose> : <AiOutlineMenu size={20}></AiOutlineMenu> }
            
        </div  >
        
        
            <ul className={!nav ? "fixed left-0 top-0 w-[90%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-700 uppercase " : "ease-in-out duration-700 fixed left-[-100%] uppercase"}>
            <h1 className="w-full text-3xl font-bold text-[#4f6dc0] m-4 mt-11">Menu</h1>
            
            <li className="p-4 border-b border-gray-600 hover:scale-105 duration-300"><Link to={'/'} onClick={handlenav}>Home</Link></li>
            <li className="p-4 border-b border-gray-600 hover:scale-105 duration-300"><Link onClick={handlenav} to={'/contact'}>contact</Link></li>
            <li className="p-4 border-b border-gray-600 hover:scale-105 duration-300"><Link onClick={handlenav} to={'/resources'}>resources</Link></li>
            <li className="p-4 hover:scale-105 duration-300"><Link   to={'/socials'}>Socials</Link></li>

            </ul>
        
    </div>
  )
}

export default Navbar