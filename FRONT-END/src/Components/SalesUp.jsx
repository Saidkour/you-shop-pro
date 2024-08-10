export default function SalesUp(){
    return(
        <>
        <section
         className='bg-[url("./Assets/promo-banner-img.jpg")]  bg-cover md:bg-[length:50%_100%] lg:bg-[length:70%_100%] pt-80 md:p-0 md:py-12 bg-right bg-no-repeat  md:grid grid-cols-2 '>
            <div className="container px-0   md:ps-10   ">
                <div className=" bg-white p-12 ps-20   shadow-gray-600 shadow-2xl ">
                    <h2 className="mt-8 text-4xl text-semi-black font-semibold pb-8">Sales up to 50% OFF</h2>
                    <p className="pb-8">Molestie amet tempor, diam id magna ridiculus tincidunt cursus curabitur non ipsum mattis in vel venenatis nam enim facilisis mi, egestas metus, nunc at.</p>
                    <button
                     type="button"
                     className="bg-primary px-5 py-2   text-black  ">SHOP NOW</button>
                </div>
            </div>   
        </section>
        
        </>
    )
}