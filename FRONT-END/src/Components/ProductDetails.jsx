import { useEffect, useState } from "react"
import ProductList from "./ProductList";
import { useParams } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
// import { useFetch } from "../../server/useFetch";
import { ADDTOCART, UPDATECOUNTORDER } from "../REDUX/OrdersReducer/ActionsOr";

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orders.orders)
    const products = useSelector((state) => state.products.products.products)
    const details = products?.find((product)=>product.id === id)
    // useFetch()
  
    const [quantity, setQuantity] = useState(1);
    const [switchDescRev, setSwitchDescRev] = useState(true)



    console.log('products', products)
    console.log('details', details)
    console.log('orders', orders.count)
    


    
    const handleAddToCard = () => {
            if (!details) {
                return null; 
            }
          const CheckIfOrderExists = orders.find((order) =>  order.id === id)
          if(CheckIfOrderExists) {
            dispatch(UPDATECOUNTORDER(id, quantity))
          } else {
            dispatch(ADDTOCART(details, quantity));
          } 

    }
    
    
    useEffect(() => {
        const existingOrder = orders.find((order) => order.id === id);
        if (existingOrder) {
          setQuantity(existingOrder.count);
        }
      }, [id, orders]);
      

    const handleClickQuantity = (event) => {
        switch (event.target.name) {
            case "+":
                setQuantity((prev) => prev + 1);
                break;
            case "-":
                if (quantity <= 1) {
                    return
                }
                else {
                    setQuantity((prev) => prev - 1);
                }
                break;
            default:
                console.error('error')
        }
    }


    const handleChangeQuantity = () => {
        const newValue = quantityField.current.value.replace(/[^0-9]/g, '')
        if (newValue >= 0 || newValue == "") {
            (newValue == "") ? setQuantity(0) : setQuantity(parseInt(newValue))
        }
    }
  
  
    return <>
         { details &&
            <section className="container mt-10">
           <div className="p-5 lg:flex block justify-between">
               <div className="lg:max-w-[50%] sm:m-auto max-w-[100%] sm:max-w-[70%] p-2 sm:p-10">
                   <div className="md:p-5">
                     {details && (
                     <img className="h-full w-full lg:hover:scale-[1.2] " src={details.img} alt={details.name} />
                    )}                       
                   </div>
               </div>
               <div className="lg:max-w-[50%] lg:py-5 max-w-[100%] pl-4">
                   <div className="block py-2  opacity-[0.8] text-xl text-semi-black">
                       <span >
                           <a className="text-semi-black" href="#">Home </a>
                       </span>
                       <span>
                           <a className="text-semi-black mx-1" href="#">{details.category}</a>
                       </span>
                       {details.name}
                   </div>
                   <div className=" mt-4 mb-5">
                       <h1 className="text-[40px] font-bold text-semi-black  leading-1.2">{details.name}</h1>
                   </div>
                   <div className="mb-3">
                       <span className="text-[22px] font-bold opacity-[0.9]">${details.price}</span>
                       <span className="text-[18px] opacity-[0.9] ml-1">& free shipping</span>
                   </div>
                   <div className="mb-3">
                       <p >{details.disc}</p>
                   </div>
                   <div className="block max-w-[300px] sm:flex  p-2">
                       <div className=" flex">
                           <span className="border border-r-0 border-opacity-[0.5] border-semi-black">
                               <button className="hover:bg-primary w-[40px] h-[40px] " onClick={handleClickQuantity} name="-" >-</button>
                           </span>
                           <span >
                           <input onChange={handleChangeQuantity} className="w-[40px] h-[42px] text-center text-semi-black border border-semi-black focus:border-dashed  outline-none" type="text" name="quantity" id="quantity"  value={quantity} />
                           </span>
                           <span className=" border border-l-0 border-opacity-[0.5] border-semi-black">
                               <button className="hover:bg-primary w-[40px] h-[40px]" onClick={handleClickQuantity} name="+" >+</button>
                           </span>
                       </div>
                       <div>
                           <button className="bg-primary px-7 py-3 text-semi-black text-[0.75rem]  mt-3 sm:mt-0 sm:ml-5 hover:text-semi-white font-medium leading-tight uppercase tracking-wider" onClick={handleAddToCard}>add to card</button>
                       </div>
                   </div>
                   <div className="mt-2">
                       <hr />
                       <div className="mt-2">
                           <span>
                               Category: <a className="text-semi-black hover:text-primary" href="#">{details.category}</a>
                           </span>
                       </div>
                   </div>
               </div>
           </div>
           <div className="p-5 ">
               <hr />
               <div className="mt-3 mb-5">
                   <span onClick={() => setSwitchDescRev(prev => !prev)} className="relative cursor-pointer text-[20px] font-bold">
                       {switchDescRev ? <span className="absolute rounded top-[-14px] w-[106px] h-[1px] left-0 right-0 bottom-0 bg-semi-black"></span> : <span className="absolute rounded top-[-14px] w-[93px] h-[1px] left-[117px] right-0 bottom-0 bg-semi-black"></span>}
                       description
                   </span>
                   <span onClick={() => setSwitchDescRev(prev => !prev)} className="cursor-pointer min-w-[106px] ml-5 text-[20px] font-bold">
                       reviews{`(0)`}
                   </span>
               </div>
               {
                   switchDescRev ?
                       <Description />
                       :
                       <Reviews />
               }
           </div>
           <div className="p-6">
               <h1 className="text-[48px] font-bold leading-tight ml-10 mb-5">Related products</h1>
               <ProductList />
           </div>
       </section>

        
        }
        </>


    function Description() {
        return (
            <>
                <div>
                    <div className="flex md:justify-end ">
                        <div className="md:max-w-[50%] max-w-[100%] px-[50px] py-[100px] border ">
                            <div className="text-center">
                                <h3 className="font-bold text-semi-black text-[30px] mb-5">Features</h3>
                                <p className="mb-5">{details.features.text}</p>
                            </div>
                            <div>
                                <ul>
                                         <div  className=" flex mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" className="bi bi-check2 font-bold" viewBox="0 0 16 16">
                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                            </svg>
                                            <li className="ml-4">{details.features.items}</li>
                                        </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:justify-start mt-10 md:mt-0 ">
                        <div className="md:max-w-[50%] max-w-[100%] px-[50px] py-[100px] border ">
                            <div className="text-center">
                                <h3 className="font-bold text-semi-black text-[30px] mb-5">Features</h3>
                                <p className="mb-5">{details.features.text}</p>
                            </div>
                            <div>
                                <ul >
                                         <div  className="  flex mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" className="bi bi-check2 " viewBox="0 0 16 16">
                                                <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                            </svg>
                                            <li className="ml-4">{details.features.items}</li>
                                        </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    function Reviews() {
        const [hoverValue, setHoverValue] = useState(0);
        const [ratingValue, setRatingValue] = useState(0);

        const handleMouseEnter = (value) => {
            setHoverValue(value);
        };

        const handleMouseLeave = () => {
            setHoverValue(0);
        };

        const handleRatingClick = (value) => {
            setRatingValue(value);
        };
        const handleSubmit = (e) => {
            e.preventDefault()
        }
        return (
            <>
                <div className="">
                    <div className="mt-5 mb-3">
                        <h1 className="hidden">Reviews</h1>
                        <span className="text-[]24px">There are no reviews yet.</span>
                    </div>
                    <div>
                        <div className="border p-8">
                            <span className="text-semi-black  text-[23px] opacity-[0.8] leading-5 font-medium">Be the first to review “{details.name}”</span>
                            <form className="mt-3" action="">
                                <p className="mb-5">
                                    <span >Your email address will not be published. Required fields are marked *</span>
                                </p>
                                <div className="flex mb-5">
                                    <span className="text-lg font-medium pr-2">Your rating *</span>
                                    <p>
                                        <div className="flex items-center p-[4px]">
                                            {/* Rating Stars */}
                                            <div className="flex">
                                                {[...Array(5)].map((_, index) => {
                                                    const starValue = index + 1;
                                                    return (
                                                        <label
                                                            key={starValue}
                                                            className="cursor-pointer mr-[2px]  text-2xl"
                                                            onMouseEnter={() => handleMouseEnter(starValue)}
                                                            onMouseLeave={handleMouseLeave}
                                                            onClick={() => handleRatingClick(starValue)}
                                                        >
                                                            {starValue <= (hoverValue || ratingValue) ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#edb932" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#edb932" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                                                            </svg>}
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </p>
                                </div>
                                <p>
                                    <label className="text-lg font-medium pr-2" htmlFor="desc">Your review *</label>
                                    <textarea className="w-[100%] mt-2 p-2 focus:border-dashed focus:outline-none border-[1px] border-semi-black" name="desc" id="desc" cols="45" rows="5"></textarea>
                                </p>
                                <div className="block lg:flex ">
                                    <p className=" lg:min-w-[50%]">
                                        <span className="pb-1 lg:pb-0 "><label htmlFor="name">Name *</label></span>
                                        <span><input className="w-[100%] p-2 mb-2 focus:outline-none border-[1px] border-semi-black" type="text" id="name" name="name" /></span>
                                    </p>
                                    <p className=" lg:min-w-[47%] lg:ml-8">
                                        <label className="" htmlFor="email">Email *</label>
                                        <input className="w-[100%] p-2 focus:outline-none border-[1px] border-semi-black" type="Email" id="email" name="email" />
                                    </p>
                                </div>
                                <p className="mt-3">
                                    <input type="checkbox" name="check" id="check" />
                                    <label htmlFor="check"> Save my name, email, and website in this browser for the next time I comment.</label>
                                </p>
                                <p>
                                    <button className=" mt-5 bg-primary px-4 py-2 min-w-[110px] hover:text-semi-white" onClick={handleSubmit}>Submit</button>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductDetails