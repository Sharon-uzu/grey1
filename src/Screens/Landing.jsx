import React,{useState} from 'react'

import bg from "../assets/f1dc3c1262230b2b.png"
import rider from '../assets/ride-removebg-preview.png'
import { MdLocationOn } from "react-icons/md";
import about from '../assets/bg.jpg';
import Modal from 'react-modal';
import Select from 'react-select'
import User from '../Components/User';
import FooterC from '../Components/FooterC';

Modal.setAppElement('#root');
const Landing = () => {

    const userData = [
        {
            id:1,
            img: rider,
            title:"Become A Driver",
            text: "As a delivery driver,you'll make reliable money working anytime, anywhere.",
            link: "Start earning"
        },
        {
            id:2,
            img: rider,
            title:"Be Our Vendor",
            text: "Grow your business or store and reach new customers by partnering with us.",
            link: "SignUp your Store"
        },
        {
            id:3,
            img: rider,
            title:"Admin SignUp",
            text: "Experience the best we have  to offer, all in one app.",
            link: "Sign Up As Admin"
        }
    ]

    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
      setIsOpen(!isOpen);
    }

    const options = [
      { value: 'Admin', label: 'Admin' },
      { value: 'Vendor', label: 'Vendor' },
      { value: 'Rider', label: 'Rider' }
    ]
   
  return (
    <div>
        <section className='h-screen md:h-96 lg:h-screen'>
            
       <User/>

      <main  className='gap-8 border-red-50 flex justify-center flex-col  w-full  h-4/5 bg-no-repeat bg-cover bg-center ' style={{backgroundImage : `url(${bg})`}}>
        <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl break-words w-11/12 mx-auto'>Favourite Restaurants <br /> At Your Doorstep</h1>
        <p className=' font-semibold text-lg  w-11/12 mx-auto'>Get your favourite restaurant at the snap of your fingers</p>
        <form action="" className=' w-4/6 md:w-1/2  lg:w-1/2 flex lg:ml-10 bg-white ml-4 md:h-12  items-center pl-3 rounded-2xl justify-between' >
                <MdLocationOn className=' w-5 md:w-8 h-8 text-2xlg'/>
                <input type="search" name="" id=""  placeholder='Enter delivery address' className='md:w-4/5 w-3/5 h-4/5 pl-2 border-none outline-none' />
            
                <input type="submit" value="Search" className='bg-black text-white w-1/5 md:w-1/5 h-full rounded-br-md rounded-tr-md'/>
        </form>
      </main>
        </section>

        <section className='flex flex-col md:flex-row justify-between mx-auto w-11/12 py-10 gap-16 items-center mb-3'>
            <div className='lg:w-1/2 w-full'>
                <h2 className='font-bold text-5xl mb-5'>What Is AZ?</h2>
                <p className='text-lg '>Lorem ipsum dolor sit amet consectetur. Sem tortor pretium id posuere purus massa lectus euismod. Ultrices mollis vitae dictum congue in ac neque in. In sapien sit iaculis dignissim. Vel sed id vestibulum vestibulum.Lorem ipsum dolor sit amet consectetur. Sem tortor pretium id posuere purus massa lectus euismod. Ultrices mollis vitae dictum congue in ac neque in. In sapien sit iaculis dignissim. Vel sed id vestibulum vestibulum.</p>
            </div>
            <div className='md:w-1/2 w-full'>

                <img src={about} alt="" className='w-full rounded-2xl' />
            </div>

        </section>

        <section className='md:w-11/12 w-10/12 mx-auto text-center flex flex-col md:flex-row justify-between pb-20 pt-8'>
            {userData && userData.map(({img,title,text,link},index)=>{

                return(
                <div className='w-full lg:w-3/12 gap-8  flex flex-col items-center md:gap-5 ' key={index}>
                    <img src={img} alt="" className='w-1/5  md:w-4/5 '/>
                    <h2 className='font-bold text-3xl md:text-md'>{title}</h2>
                    <p className='text-lg'>{text}</p>
                    <button className='border-solid border-red-800 py-1 px-3 rounded-xl hover:bg-red-800 hover:text-white hover:font-bold border-2 text-red-800 font-bold text-md cursor-pointer bg-red' onClick={() => setIsOpen(true)}>{link}</button>

                 

                <div>
          
                </div>
                <Modal isOpen={isOpen}
                  onRequestClose={toggleModal}
                    contentLabel='Example Modal' 

                    className=' lg:w-1/2 md:w-3/5 mx-auto w-11/12 bg-white mt-1/5  text-center py-6  flex flex-col gap-6 relative top-1/5 mt-6 rounded-xl'
                    style={{
                      overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'hsl(0, 0%, 0%, .2)',
                      
                      }
                    }}
                    >

                    <form className=' flex flex-col gap-6'>
                        <div className='flex justify-between w-11/12 mx-auto font-bold text-lg'>
                          <span>SIGNUP</span>
                          <button onClick={() => setIsOpen(false)}>X</button>
                        </div>

                        
                        
                          <input type="text" placeholder='Full Name' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none'/>
                          <input type="email" placeholder='Enter Email' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none'/>
                          <input type="tel" placeholder='Phone Number' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none' />
                          <input type="password" placeholder='Password' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none'/>
                          <input type="text" placeholder='Address' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none'/> 
                          <Select placeholder="Select roles" options={options}  className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none'/>
                          <input type="submit" value="SignUp" className='border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold' />
                    </form>
                  </Modal>
                </div>
                )
            })}
            

        </section>
        
        <FooterC/>
    </div>
  )
}

export default Landing
