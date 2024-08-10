import React, { useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { IoArrowRedoSharp, IoArrowUndo } from "react-icons/io5";


import SideBar from '../../Components/DashboardComponent/sideBar'
import { Outlet } from 'react-router-dom'

export default function Layoute() {
  const [toggle , setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(prev =>!prev)
  }

  const closeSide = () => {
    setToggle(false)
  }

  console.log(toggle)

  return <>
  
  {/* <NavBar/> */}
<div className=' h-[100vh] flex justify-center relative '>
  <div onClick={closeSide} className={toggle ? 'bg-black opacity-30 absolute top-0 right-0 h-full w-full ' : 'bg-black opacity-30 absolute top-0 -left-full h-full w-full '}  ></div>
  <span onClick={handleToggle} className='cursor-pointer opacity-95 border-2  border-primary bg-primary shadow-xl rounded-full px-1 text-white absolute left-4 top-5 hover:scale-105 hover:bg-yellow-500 transition-all' >{ <IoArrowRedoSharp style={{color: 'yellow', fontSize: '24px' }} />}</span>
  
  <div className={!toggle ? 'fixed bg-white hidden left-0 h-[100vh] lg:w-2/12 w-6/12 shadow-xl': 'fixed  bg-white left-0 h-[100vh] xl:w-3/12 lg:w-4/12 md:w-6/12 w-10/12 shadow-xl' }>
  <span onClick={handleToggle} className='cursor-pointer border-2  border-primary bg-primary shadow-xl rounded-full px-1 text-white absolute -right-5 top-6 hover:bg-yellow-500 hover:scale-105 transition-all' >{<IoArrowUndo style={{color: 'yellow', fontSize: '24px' }} />}</span>

    <div>
      <SideBar/>
    </div>
  </div>
 
  <div className=' xl:w-10/12 w-full overflow-y-auto p-6 '>
    <Outlet/>
  </div>
</div>
  
  </>
}
