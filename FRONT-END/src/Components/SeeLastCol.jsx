export default function SeeLastCol() {
  return (
    <>
      <section
        style={{ backgroundSize: "50% 100%" }}
        className=' bg-semi-white md:bg-[url("./Assets/newsletter-banner-img.jpg")] bg-left bg-no-repeat w-full mt-5'
      >
        <div className="container p-10  grid grid-cols-1 md:grid-cols-2">
          <div className="w-full ps-5 text-base col-start-2 ">
            <span className="relative text-xs uppercase tracking-wider opacity-1 pl-[50px]  text-primary">
              <span className="absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-primary"></span>
              SUBSCRIBE TO OUR NEWSLETTER
            </span>
            <h1 className="mt-8 text-4xl text-semi-black font-semibold">
              See The Latest Collection & Get Special Offer
            </h1>
            <div className="flex flex-col md:flex-col  lg:flex-row justify-between sm:items-center gap-3 mt-8 mb-3">
              <input
                className=" bg-white border border-black text-gray-900 w-full focus:border-black px-5 py-3 text-sm "
                type="text"
                placeholder="Email address"
              />
              <button
                type="button"
                className="focus:outline-none  md:ml-2 text-semi-black w-full  sm:max-w-[200px] bg-primary hover:text-white font-medium  text-sm px-5 py-3 h-full "
              >
                SUBSCRIBE
              </button>
            </div>
            <p className="text-semi-gray">
              Cras interdum lectus velit nibh senectus fringilla ut.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
