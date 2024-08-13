import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShowProduct } from '../../API/products';

export default function ProductDetails() {
    const { id } = useParams();

    const fetchShowProduct = async () => {
     try {
       const response = await ShowProduct(id)
       console.log(response)
     } catch (err) {
       console.log(err)
     }
    }

    useEffect(() => {
        fetchShowProduct()
    },[])

    // console.log(ShowProduct(id))
    console.log(id)

  return (
    <div>
        <div>
            <div>image</div>
            <div>information</div>
        </div>
    </div>
  )
}
