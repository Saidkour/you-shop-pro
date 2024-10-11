import ic1 from "../Assets/icon-04.png";
import ic2 from "../Assets/icon-01.png";
import ic3 from "../Assets/icon-02.png";
import ic4 from "../Assets/icon-03.png";

export default function WhyChoseUs() {
  return (
    <>
      <section className="pb-10">
        <div className="px-10 pt-10  lg:pt-32 container relative">
          <span className="relative text-xs uppercase tracking-wider  opacity-1 pl-[50px]  text-primary">
            <span className="absolute top-[8px] w-[35px] h-[1px] left-0 right-0 bottom-0 bg-primary  "></span>
            IF YOU WONDER
          </span>
          <h1 className="bold text-[30px] self-start font-medium md:text-[48px] leading-tigh p-4 text-center sm:text-start">
            Why Choose Us
          </h1>
          <div className="  lg:pb-10 px-4 lg:flex lg:gap-28">
            <div  className="mb-4">
              <img src={ic1} className=" " alt="Big Discounts" />
              <h5 className="font-semibold  text-xl text-black">
                Big Discounts
              </h5>
              <p>
                Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
                orci viverra, cursus justo.
              </p>
            </div>
            <div className="mb-4">
              <img src={ic2} alt="Big Discounts" />
              <h5 className="font-semibold  text-xl text-black">
                Big Discounts
              </h5>
              <p>
                Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
                orci viverra, cursus justo.
              </p>
            </div>
            <div className="mb-4">
              <img src={ic3} alt="Big Discounts" />
              <h5 className="text-semibold font-semibold  text-xl text-black">
                Big Discounts
              </h5>
              <p>
                Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
                orci viverra, cursus justo.
              </p>
            </div>
            <div className="mb-4">
              <img src={ic4} alt="Big Discounts" />
              <h5 className="text-semibold font-semibold  text-xl text-black">
                Big Discounts
              </h5>
              <p>
                Integer euismod blandit nunc sit amet sollicitudin. Fusce quis
                orci viverra, cursus justo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
