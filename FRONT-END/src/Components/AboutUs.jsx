import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
const CountdownTimer = ({ val }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count === val.num) {
        clearInterval(interval);
      } else {
        setCount((prevCount) => prevCount + 1);
      }
    }, val.duration);

    return () => clearInterval(interval);
  }, [count, val]);

  return <span>{count}</span>;
};

function AboutUs() {
  return (
    <section>
      <div className="container relative">
        <div className="absolute bg-semi-black w-full h-full left-0 right-0 bottom-0 opacity-[0.02]  bg-cover z-[-1] bg-center top-0"></div>
        <div className="py-[100px] text-center max-w-[700px] m-auto ">
          <div className="mb-2 ">
            <h1 className="text-[48px] text-semi-black font-semi-bold">
              About Us
            </h1>
          </div>
          <div>
            <p className="w-[100%] text-semi-black">
              Tempus amet, sit erat malesuada lorem purus dictum pretium,
              posuere sagittis ultricies enim massa nisi neque augue in
              condimentum diam commodo ornare.
            </p>
          </div>
        </div>
        <div className="block md:flex mt-15 p-2">
          <div className="md:max-w-[50%] max-w-[100%] mb-11 md:p-8">
            <img
              className="w-full h-full"
              style={{
                boxShadow: "16px 24px 80px -16px rgba(0, 0, 0, 0.4)",
              }}
              loading="lazy"
              src="/furniture-store-about-product-img.jpg"
              alt="about-img"
            />
          </div>
          <div className="md:max-w-[50%] max-w-[100%] ">
            <div>
              <img
                className="w-full h-full"
                style={{
                  boxShadow: "16px 24px 80px -16px rgba(0, 0, 0, 0.4)",
                }}
                loading="lazy"
                src="/public/about-founder.jpg"
                alt="imgfounder"
              />
            </div>
            <div className="text-left">
              <p className="my-9 mx-auto text-[16px] font-meduim">
                Eu egestas felis et viverra amet dictum ornare turpis gravida
                orci bibendum odio sit volutpat proin at enim ultrices dolor
                nullam tortor ornare cursus nibh sit adipiscing adipiscing enim
                erat nunc donec tellus, egestas commodo netus adipiscing
                ultrices at phasellus ut vitae nunc malesuada id nec suspen
                disse sit turpis mauris biben dum amet dignissim in sit duis
                pharetra vehicula eget suspen disse at vitae integer gravida
                sagittis.
              </p>
              <h6 className="text-xs font-semibold uppercase tracking-wider">
                HARVEY D. GEORGE
              </h6>
              <h6 className="text-xs leading-8">Founder of KAYUU</h6>
            </div>
          </div>
        </div>
        <div>
          <div className="relative ">
            <div className='absolute top-0 left-0 bg-no-repeat w-full h-full xl:bg-fixed bg-[url("/about-big-img.jpg")] opacity-[0.87] bg-contain  md:bg-cover md:bg-center z-[-1]'></div>
            <div className="absolute bg-black  w-full h-full bg-no-repeat xl:bg-fixed left-0 right-0 bottom-0  opacity-[0.47] bg-cover z-[-1] bg-center top-0"></div>
            <div className="max-w-[100%] xl:max-w-[1280px] block mx-auto  pt-[50px]">
              <div className="block md:flex text-center bg-white mt-[80px] sm:mt-[200px] md:mt-[340px] lg:mt-[500px]">
                <div className="md:min-w-[50%] min-w-[100%] flex">
                  <div className="block min-w-[50%] p-5">
                    <p className="font-semibold leading-none text-[32px] md:text-6xl">
                      <CountdownTimer val={{ num: 1982, duration: 0.5 }} />
                    </p>
                    <p className="mt-5 text-xs tracking-wider">founded</p>
                  </div>
                  <div className="block p-5 min-w-[50%]">
                    <p className="font-semibold leading-none text-[32px] md:text-6xl">
                      <CountdownTimer val={{ num: 500, duration: 3 }} />
                    </p>
                    <p className="mt-5 text-xs tracking-wider">EMPLOYEE</p>
                  </div>
                </div>
                <div className="flex md:min-w-[50%] min-w-[100%]">
                  <div className="block p-5 min-w-[50%]">
                    <p className="font-semibold leading-none text-[32px] md:text-6xl">
                      <CountdownTimer val={{ num: 1000, duration: 2 }} />+
                    </p>
                    <p className="mt-5 text-xs tracking-wider">PRODUCTS</p>
                  </div>
                  <div className="block p-5 min-w-[50%] ">
                    <p className="font-semibold leading-none text-[32px] md:text-6xl">
                      <CountdownTimer val={{ num: 5, duration: 300 }} />
                    </p>
                    <p className="mt-5 text-xs tracking-wider">STORES</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 mt-5">
          <div className="px-10 pt-5 md:py-10">
            <p className="font-medium text-semi-black">
              Faucibus etiam lacus sollicitudin sed amet, sit vitae lorem ornare
              egestas nisi, diam cursus non mattis etiam sodales vestibulum arcu
              a, aliquam at leo condimentum etiam dui eget arcu nunc, vivamus
              vel facilisi auctor aliquet eu mollis accumsan fermentum ipsum
              ornare viverra proin eleifend ultricies est, aliquet felis vivamus
              praesent.
            </p>
          </div>
          <div className="p-10 block pt-5 md:flex">
            <div className="md:min-w-[50%] md:px-3 px-0 min-w-[100%]">
              <p className="text-semi-black">
                Sit ipsum elit nisl commodo cursus diam massa nunc, commodo
                amet, viverra lobortis aliquam leo vitae in dictum sagittis, dui
                est pellentesque non est nunc aliquet magna malesuada diam nunc
                quis duis id nunc id ultrices cursus lorem consequat tincidunt
                pharetra, risus quam facilisis lectus ipsum ut mattis pretium
                eros tincidunt neque.
              </p>
            </div>
            <div className="md:min-w-[50%] md:pt-0 px-0 md:px-3 pt-5 min-w-[100%]">
              <p className="text-semi-black">
                Aliquet magna malesuada diam nunc quis duis id nunc id ultrices
                cursus lorem consequat tincidunt pharetra, risus quam facilisis
                lectus ipsum ut mattis pretium eros tincidunt neque, faucibus
                volutpat accumsan pretium arcu in donec et, rhoncus in sed
                eleifend odio gravida vitae quam donec faucibus molestie
                bibendum.
              </p>
            </div>
          </div>
          <div className="md:flex block p-2 md:p-10">
            <div className="md:min-w-[50%] min-w-[100%] p-2">
              <h1 className="font-bold text-[48px] px-5 mb-5">
                The Best Quality Furniture Store in Town
              </h1>
              <p className="px-5 mb-5">
                Sagittis enim, auctor ultrices dui etiam viverra nulla
                scelerisque in semper porttitor pharetra, tortor amet lorem
                cursus velit posuere tristique tempus, tincidunt non velit quis
                congue lectus a ullamcorper iaculis.
              </p>
              <div className="px-5 mb-5">
                <div className="block md:flex  mb-5">
                  <div className="ml-4 mb-3 md:mb-0 md:ml-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#edb932"
                      viewBox="0 0 640 512"
                    >
                      <path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-bold text-[16px]">Huge Selection</h6>
                    <p className="mt-2">
                      Sagittis enim, auctor ultrices dui etiam viverra nulla.
                    </p>
                  </div>
                </div>
                <div className="block md:flex  mb-5">
                  <div className="ml-4 mb-3 md:mb-0 md:ml-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#edb932"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-bold text-[16px]">
                      Low Price Everyday
                    </h6>
                    <p className="mt-2">
                      Tincidunt sed eget nunc tellus viverra sapien massa
                      cursus.
                    </p>
                  </div>
                </div>
                <div className="block md:flex   mb-5">
                  <div className="ml-4 mb-3 md:mb-0 md:ml-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="#edb932"
                      viewBox="0 0 640 512"
                    >
                      <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-bold text-[16px]">Same Day Delivery</h6>
                    <p className="mt-2">
                      retium, tempus ultricies lacus eleifend scelerisque sem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:min-w-[50%] min-w-[100%] ">
              <img
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ boxShadow: "rgba(0, 0, 0, 0.4) 6px 8px 32px -16px" }}
                src="/about-last-img.jpg"
                alt="last-img-about"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// prop validation
CountdownTimer.propTypes = {
  val: PropTypes.object,
};

export default AboutUs;
