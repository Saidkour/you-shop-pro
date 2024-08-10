import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

export default function OrderTable() {
  
 const orders = useOutletContext();

  return <>
     <table className='border w-full'>
      <tr className='border font-bold'>
         <td className='p-4 border-r'>ID</td>
         <td className='p-4 border-r'>client</td>
         <td className='p-4 border-r'>total price (DH)</td>
         <td className='p-4 border-r'>status</td>
         <td className='p-4 border-r'>payment method</td>
         <td className='p-4 border-r'>date </td>
      </tr>
      {orders && orders.map((item) => {
        return <>
           <tr className='border '>
              <td className='p-4 border-r font-bold'>{item.id}</td>
              <Link to={`${item.id}`}>
                <td className='p-4 font-semibold cursor-pointer text-blue-700 hover:underline transition-all'>{item.user.name}</td>
              </Link>
              <td className='p-4 border-l border-r'>{item.total_price}</td>
              <td className='p-4 border-r'>{item.status}</td>
              <td className='p-4 border-r'>{item.payment_method}</td>
              <td className='p-4 border-r'>{item.created_at.slice(0,10)} </td>
          </tr>
        </>
      })

      }
     </table>
  </>
}
