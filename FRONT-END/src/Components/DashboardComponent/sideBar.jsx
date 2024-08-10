import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/kayuu-logo-dark.svg'

export default function SideBar() {
  return (
    <div className='p-2 '>
        <div className=' flex justify-around py-6 mb-4'>
           <Link to={'/'}>
              <img className=' w-24' src={logo} alt="logo" />
           </Link>
           {/* <span>You Shop</span> */}
        </div>
        <div className='border-t border-primary py-4'>
          <ul className='p-6 font-bold '>
            <Link to={'/dashboard'}>
              <li className='text-yellow-500 tracking-wider border border-yellow-500 px-2 py-1 mb-3 cursor-pointer hover:border-yellow-600 hover:text-yellow-600 hover:scale-105 transition-all '>Orders</li>
            </Link>
            <Link to={'/dashboard/addProducts'}>
              <li className='text-yellow-500 tracking-wider border border-yellow-500 px-2 py-1 mb-3 cursor-pointer hover:border-yellow-600 hover:text-yellow-600 hover:scale-105 transition-all '>Add products</li>
            </Link>
            <Link to={'/dashboard/productsList'}>
              <li className='text-yellow-500 tracking-wider border border-yellow-500 px-2 py-1 mb-3 cursor-pointer hover:border-yellow-600 hover:text-yellow-600 hover:scale-105 transition-all '>Products</li>
            </Link>
            <Link to={'/dashboard/feedback'}>
              <li className='text-yellow-500 tracking-wider border border-yellow-500 px-2 py-1 mb-3 cursor-pointer hover:border-yellow-600 hover:text-yellow-600 hover:scale-105 transition-all '>Feedback</li>
            </Link>
            <Link to={'/dashboard/feedback'}>
              <li className='text-yellow-500 tracking-wider border border-yellow-500 px-2 py-1 mb-3 cursor-pointer hover:border-yellow-600 hover:text-yellow-600 hover:scale-105 transition-all '>Settings</li>
            </Link>
          </ul>
        </div>
    </div>
  )
}
