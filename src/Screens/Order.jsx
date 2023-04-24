import React,{useState} from 'react'

// import Swiper core and required modules
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Modal from 'react-modal'
import Select from 'react-select'
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import User from "../Components/User";
import p1 from '../assets/f1dc3c1262230b2b.png'
import p2 from '../assets/bg.jpg'
import p3 from '../assets/bg3.png'
import p4 from '../assets/bg4.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import SignUpButton from '../Components/ButtonComponent/SignUpButton';



const Order = () => {

    const userData = [
        {
            img: p2,
            name:"Rice & Chicken",
            price: 3000,
            order: "Order"
        },
        {
            img: p1,
            name:"Rice & Beef",
            price:2500,
            order: "Order"
        },
        {
            img: p3,
            name:"Rice & moimoi",
            price:2000,
            order: "Order"
        },

        {
            img: p4,
            name:"Beans",
            price:2000,
            order: "Order"
        },
        {
            img: p2,
            name:"Egusi soup",
            price: 4000,
            order: "Order"
        },
        {
            img: p1,
            name:"Spaghetti",
            price:1500,
            order: "Order"
        },

        {
            img: p2,
            name:"Rice & Chicken",
            price: 3000,
            order: "Order"
        },
        {
            img: p1,
            name:"Rice & Beef",
            price:2500,
            order: "Order"
        },
        {
            img: p3,
            name:"Rice & moimoi",
            price:2000,
            order: "Order"
        }
    
    ]

    // modal

    const [isOpen, setIsOpen] = useState(false)
    const toggleModal = () => {
      setIsOpen(!isOpen);
    }

    const options = [
      { value: 'Rice', label: 'Rice' },
      { value: 'Beans', label: 'Beans' },
      { value: 'Sphaghetti', label: 'Spaghetti' }
    ]
   
    const options1 = [
        { value: 'Genesis', label: 'Genesis' },
        { value: 'Kilimanjaro', label: 'Kilimanjaro' },
        { value: 'Domino', label: 'Domino' }
      ]

    return(
        <>
        <User/>
            <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      
      pagination={{ clickable: true }}
      navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                
                style={{zIndex:1}}
      
    >
      <SwiperSlide><img src={p1} alt="" className="h-64" /></SwiperSlide>
      <SwiperSlide><img src={p2} alt="" className="h-64" /></SwiperSlide>
      <SwiperSlide><img src={p4} alt="" className="h-64" /></SwiperSlide>
      <SwiperSlide><img src={p3} alt="" className="h-64" /></SwiperSlide>
      <SwiperSlide><img src={p2} alt="" className="h-64" /></SwiperSlide>
      <SwiperSlide><img src={p4} alt="" className="h-64" /></SwiperSlide>
      <SwiperSlide><img src={p3} alt="" className="h-64" /></SwiperSlide>
      <SwiperSlide><img src={p2} alt="" className="h-64" /></SwiperSlide>

    
    </Swiper>

    <div className="w-11/12 mx-auto flex flex-wrap my-20 justify-between">

    {userData && userData.map(({img,name,price,order},index)=>{
            return(
                <div className="w-2/8 border-2 border-solid border-yellow p-4 rounded-md mb-4" key={index}>
                    <img src={img} alt="" className="w-full h-48 mb-4"/>
                    <span className="flex justify-between font-bold text-lg pb-4">{name}<span></span>{price}0</span>
                {/* <SignUpButton text={`order`} className=" text-md hover: text-black border-solid border-2 font-bold"  onClick={() => setIsOpen(true)} />  */}
                <button className='text-md hover: text-black border-solid border-2 font-bold w-fit px-5 py-1 lg:2/5 lg:h-12  md:h-12 rounded-2xl font-semibold' style={{border:"2px solid rgba(254, 206, 47, 1)", backgroundColor:"rgba(254, 206, 47, 1)"}} onClick={() => setIsOpen(true)}>{order}</button>

                <Modal isOpen={isOpen}
                  onRequestClose={toggleModal}
                    contentLabel='Example Modal' 

                    className=' lg:w-1/2 md:w-3/5 mx-auto w-11/12 bg-white mt-1/5  text-center py-6  relative top-1/5 mt-6 rounded-xl'
                    style={{
                      overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'hsl(0, 0%, 0%, .2)',
                        zIndex:2
                      }
                    }}
                    >

                    <div className='flex justify-between w-11/12 mx-auto font-bold text-lg pb-4'>
                      <span>SIGNUP</span>
                      <button onClick={() => setIsOpen(false)}>X</button>
                    </div>
                    
                    <form className=' flex flex-col gap-6'>

                    <Select placeholder="Select food" options={options}  className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none'/>
                      <Select placeholder="Select restaurant" options={options1}  className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md text-start h-10 outline-none'/>
                      <input type="text" placeholder='Name' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none'/>
                      <input type="text" placeholder='Address' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none'/>
                      <input type="tel" placeholder='Phone' className='border-solid border-rgb(59 130 246 / 0.5) border-2 w-11/12 mx-auto bg-transparent rounded-md pl-3 h-10 outline-none'/> 
                      
                      <input type="submit" value="CheckOut" className='border-solid border-black border-4 w-fit mx-auto py-3 px-4 rounded-xl hover:bg-black cursor-pointer hover:text-white font-bold' />
                      
                    </form>
                    
                    
                  </Modal>
                </div>

                

                
            )
        

    })}


        
        
    </div>
        </>
    )
    
    
}

export default Order