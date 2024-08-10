import React, { useState } from 'react'
import { FiBarChart2 } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'

export default function OrdersList() {
    const [status , setStatus] = useState('latest')
    console.log(status)

  const orders = useSelector((store) => store.orders.orders)

  const latest = orders.filter((item) => item.status === 'latest')
  const pending = orders.filter((item) => item.status === 'pending')
  const completed = orders.filter((item) => item.status === 'completed')
  const cancelled = orders.filter((item) => item.status === 'cancelled')
  console.log('latest',latest.length)

  const filterdDatat =orders.filter((item) => item.status === status)
  console.log('filterdDatat', filterdDatat)

   
  return <>
   <div className='mt-9'>
      <div className=' grid lg:grid-cols-4 grid-cols-2 gap-4 mb-10'>
        <Link onClick={() => setStatus('latest')} to={'/dashboard'}>
           <div className='bg-yellow-200 p-4 rounded hover:scale-105 transition-all hover:bg-yellow-100 hover:border-2 border-yellow-200'>
              <h1 className='xl:text-2xl text-[18px] font-semibold text-yellow-600 mb-2 flex items-center '>latest <span className='ml-3'><FiBarChart2 className='xl:w-10 xl:h-10 h-7 w-7 stroke-yellow-600' /></span></h1>
              <span className=' text-yellow-600'>{latest.length} latest orders</span>
           </div>
        </Link>
        <Link onClick={() => setStatus('pending')} to={'orders/pending'}>
           <div className='bg-gray-200 p-4 rounded hover:scale-105 transition-all hover:bg-gray-100 hover:border-2 border-gray-200'>
              <h1 className='xl:text-2xl text-[18px] font-semibold text-gray-600 mb-2 flex items-center '>pending <span className='ml-3'><FiBarChart2 className='xl:w-10 xl:h-10 h-7 w-7 stroke-gray-600' /></span></h1>
              <span className=' text-gray-600'>{pending.length} pending orders</span>
           </div>
        </Link>
        <Link onClick={() => setStatus('completed')} to={'orders/completed'}>
           <div className='bg-green-200 p-4 rounded hover:scale-105 transition-all hover:bg-green-100 hover:border-2 border-green-200'>
              <h1 className='xl:text-2xl text-[18px] font-semibold text-green-600 mb-2 flex items-center '>completed <span className='ml-3'><FiBarChart2 className='xl:w-10 xl:h-10 h-7 w-7 stroke-green-600' /></span></h1>
              <h1 className=' text-green-600'>{completed.length} completed orders</h1>
           </div>
        </Link>
        <Link onClick={() => setStatus('cancelled')} to={'orders/cancelled'}>
           <div className='bg-red-200 p-4 rounded hover:scale-105 transition-all hover:bg-red-100 hover:border-2 border-red-200'>
              <h1 className='xl:text-2xl text-[18px] font-semibold text-red-600 mb-2 flex items-center '>cancelled <span className='ml-3'><FiBarChart2 className='xl:w-10 xl:h-10 h-7 w-7 stroke-red-600' /></span></h1>
              <h1 className=' text-red-600'>{cancelled.length}  cancelled orders</h1>
           </div>
        </Link>
      </div>
    
   </div>

     <div className='w-full' >
          <Outlet context={filterdDatat} />
      </div>
  </>
}
