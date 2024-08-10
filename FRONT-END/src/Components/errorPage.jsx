import React from 'react'
import find from '../Assets/find.png'
import { Link } from 'react-router-dom'


export const ErrorPage = () => {
   
    const isAuthenticated = localStorage.getItem('token')

  return (
   <div className=' h-[80vh] mt-5 flex justify-center items-center'>
       <div className=' p-4 flex-col text-center '>
        <div className='flex justify-center items-center '>
             <h1 className='font-bold lg:text-5xl text-2xl mr-5 text-blue-600'>Oops!</h1>
             <img className='lg:w-48 w-32 lg:h-48 h-32' src={find} alt="" />
        </div>
        <div className='font-bold'> 404 - PAGE NOT FOUND </div>
        <div className=' lg:w-6/12 w-11/12  mt-5 m-auto '> 
            <p className='font-light mb-5'> 
                We couldn't find the page you were looking for. 
                It seems that the link you followed may be broken or the page has been moved. 
                Please check the URL for any errors or return to the homepage.
            </p>
            <Link to={isAuthenticated ? '/todos' : '/login'} className='px-8 pb-3 pt-2 tracking-wider bg-blue-600 text-white font-semibold rounded'>Home</Link>
        </div>
    </div>
   </div>
  )
}
