import { Link } from "react-router-dom";

function WhatPeopleSay() {
  return (
    <div>
      <div className="px-10 container relative">
        <div className="absolute bg-semi-black w-full h-full left-0 right-0 bottom-0 opacity-[0.01] bg-cover z-[-1] bg-center top-0"></div>
        <div className="container block px-10 justify-between">
          <div className="">
            <div className="py-[24px] flex text-xl mb-5">
              <span className="relative text-xs uppercase tracking-wider  opacity-1 pl-[50px] text-primary">
                <span className="absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-primary"></span>
                TESTIMONIALS
              </span>
            </div>
            <div className="flex flex-col  gap-6 ">
              <h1 className="bold text-[30px] self-start font-medium md:text-[48px] leading-tigh">
                what people say
              </h1>
              <Link
                to="#"
                className="bg-primary self-end px-8 py-3 font-medium text-semi-black"
              >
                View All Testimonial
              </Link>
            </div>
          </div>
          <div className="flex lg:mt-[0px] md:items-end  mt-[30px]">
            <span className=" max-w-[300px]"></span>
          </div>
        </div>
        <div className="block lg:flex pt-2">
          <div className="min-w-[50%] mt-8 lg:mt-2">
            <div className="block md:flex p-8">
              <div className="min-w-[40%] m-0 md:ml-[-34px] md:mt-[-60px]">
                <span className="w-full h-full ">
                  <img
                    style={{
                      boxShadow: "16px 24px 80px -16px rgba(0, 0, 0, 0.4)",
                    }}
                    loading="lazy"
                    src="./woman-with-black-jacket-avatar.jpg"
                    alt="women"
                  />
                </span>
              </div>
              <div className="flex flex-col min-w-[60%] pl-0 md:pl-9 py-2">
                <span className="font-semibold mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                </span>
                <span className="text-[18px] mb-5 text-semi-black opacity-[0.50]  break-all">
                  Enim, interdum vulputate netus quis sapien malesuada neque,
                  nec enim at urna gravida accumsan nunc, mi eu id ullamcorper
                  amet commodo pulvinar tortor, augue donec placerat.
                </span>
                <span className="font-semibold leading-tight">
                  Anna Cynthia
                </span>
              </div>
            </div>
          </div>
          <div className="min-w-[50%] mt-8 lg:mt-2">
            <div className="block md:flex p-8">
              <div className="min-w-[40%] m-0 md:ml-[-34px] md:mt-[-60px]">
                <span className="w-full h-full ">
                  <img
                    style={{
                      boxShadow: "16px 24px 80px -16px rgba(0, 0, 0, 0.4)",
                    }}
                    loading="lazy"
                    src="./man-wearing-glasses-avatar.jpg"
                    alt="men"
                  />
                </span>
              </div>
              <div className="flex flex-col min-w-[60%] pl-0 md:pl-9 py-2">
                <span className="font-semibold mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-quote"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                  </svg>
                </span>
                <span className="text-[18px] mb-5 text-semi-black opacity-[0.50]  break-all">
                  Porttitor diam porta eu, id et vestibulum quam vestibulum
                  facilisis nulla ornare eu pretium dictum quam pharetra, nisl
                  maecenas pretium sed eget interdum auctor et, aliquam sem
                  lectus.
                </span>
                <span className="font-semibold leading-tight">Jim Taylor</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatPeopleSay;
