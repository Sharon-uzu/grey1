import React from "react";
import logo from "../assets/photo1670686438-removebg-preview.png"
import { AiFillBell } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import SignUpButton from '../Components/ButtonComponent/SignUpButton'
import { Link } from 'react-router-dom';



const User = () => {
    return (
        <>
         <nav className='w-full h-20 bg-black flex justify-between items-center'>
        <div className="logo w-3/5 lg:w-1/5 ml-4 ">
            <img src={logo} alt="" className='w-20 object-contain'/>
        </div>
        <ul className='flex w-1/5 mr-4 justify-around items-center   gap-2 bg-red text-white text-4xl '>
             {/* <SignUpButton text="SignUp" className="bg-white hover:border-solid hover:border-2 hover:text-white hover:bg-black hover:border-white" /> */}
           <Link to='/Order'>
           <SignUpButton text="Order now" className=" text-lg hover: text-black border-solid border-2 font-bold" /> 
           </Link> 
           <AiFillBell/>
            <BsFillCartFill />
        </ul>
      </nav>
        
        </>
    )
}

export default User