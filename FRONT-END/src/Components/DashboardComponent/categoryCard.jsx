import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({categories}) {
    console.log('categories',categories)
  return <>

    {categories && categories.map((category, key) => {
    return <>
       <div key={key} className='border mt-6 p-4 bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-700 hover:scale-95 hover:border-none'>
            <div className='flex justify-between border-b pb-3'>
                <Link to={`${category.id}`} className='font-bold tracking-wider text-xl text-yellow-700  hover:text-yellow-600 transition-all duration-500'>{category.name}</Link>
                <div className='text-yellow-700'><span className='font-light text-yellow-700'>products total</span> : {category.product.length}</div>
            </div>
            <div className='flex justify-end mt-4'>
                <Link to={`${category.id}`} className='bg-gray-400 py-2 px-5 rounded text-white hover:bg-gray-500 transition-all duration-500 hover:scale-105'> show more </Link>
            </div>
        </div>
    </>
    }) 
    }
  
  </>
}
