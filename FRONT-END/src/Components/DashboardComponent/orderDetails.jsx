import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GoInfo } from "react-icons/go";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";




export default function OrderDetails() {
    const { id } = useParams();
    const orderId = parseInt(id, 10);

    console.log(id)


    const orderDetails = useSelector((state) => state.orders.orders)
    console.log(orderDetails)

    const items = orderDetails.filter((item) => item.id === orderId);
    console.log(items)

  


  return <>
     <div className='mt-10 p-2'>
        <div className='border shadow bg-gray-50 p-5 mb-7'>
            <h1 className='flex items-center font-bold text-xl text-green-500 mb-2'>client information <span> <GoInfo className='ml-2 fill-green-600' /></span></h1>
            {items && items.map((item) => {
                return <>
                <div className=' flex flex-col' >
                    <span className='font-semibold mb-1'>- name : <span className='font-normal'>{item.user.name}</span> </span>
                    <span className='font-semibold mb-1'>- email : <span className='font-normal'>{item.user.email}</span> </span>
                    <span className='font-semibold mb-1'>- phone : <span className='font-normal'>0689474500</span> </span>
                    <span className='font-semibold'>- adress : <span className='font-normal'>drarga agadir</span> </span>
                </div>
                </>
            })}
        </div>

        <div className='border shadow bg-gray-50 p-5 mb-7'>
            <h1 className=' flex items-center font-bold text-xl text-green-500 mb-2'> ordered Products <span><MdOutlineProductionQuantityLimits className='ml-2 fill-green-600' /></span></h1>
            {items && items.map((item) => {
                return <>
                <div className=' flex flex-col' >
                    <span className='font-semibold mb-1'>- products : <span className='font-normal'>{item.products.map((item) => { return <> <span className='text-gray-500'> {item.name} ({item.price} dh) </span> <span className='text-black'>||</span> </>} )}</span> </span>
                    <span className='font-semibold mb-1'>- total price : <span className='font-normal'>{item.total_price} DH</span> </span>
                </div>
                </>
            })}
        </div>

        <div className='border shadow bg-gray-50 p-5 mb-7'>
            <h1 className='flex items-center font-bold text-xl text-green-500 mb-2'>payment <span><MdOutlinePayment className='ml-2 fill-green-600'/></span></h1>
            {items && items.map((item) => {
                return <>
                <div className=' flex flex-col' >
                    <div>
                        <span className='font-semibold'>- mot secret :</span>
                        <span> {item.random_key}</span>
                    </div>
                 
                </div>
                </>
            })}
        </div>

        <div className='border shadow bg-gray-50 p-5 mb-4'>
            <h1 className='flex items-center font-bold text-xl text-green-500 mb-2'>order status <span><FiBarChart2 className='ml-2 stroke-green-600'/></span></h1>
            {items && items.map((item) => {
                return <>
                <div className=' flex justify-between ' >
                    <span className='font-semibold mb-1'>- status : <span className='font-normal text-gray-500'>{item.status}</span> </span>
                    <div className='w-4/12  flex items-center '>
                        <select className='w-full border-2 outline-green-500 p-2 mr-4 rounded' name="status" id="status">
                            <option value="">update status</option>
                            <option value="latest">latest</option>
                            <option value="pending">pending</option>
                            <option value="cancelled">cancelled</option>
                            <option value="done">done</option>
                        </select>
                        <div className='ml-2'>
                          <button type='submit' className='bg-green-300 rounded py-2 px-4 text-green-700 hover:scale-105 transition-all '>save</button>
                       </div>
                    </div>
                    
                </div>
                </>
            })}
        </div>
     </div>
  </>
}
