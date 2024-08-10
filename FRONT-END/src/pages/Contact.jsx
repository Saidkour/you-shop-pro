import SeeLastCol from "../Components/SeeLastCol";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <div className="">
        <div className="container px-10 mb-10">
          <div className="flex justify-center items-center mb-5  mt-10 flex-col m-auto text-center max-w-[700px]">
            <h1 className="md:text-7xl text-5xl font-semibold my-5 text-semi-black">
              Contact
            </h1>
            <p className="text-semi-black text-lg mb-10">
              Vestibulum, diam vulputate amet cras in diam quis turpis curabitur
              tellus aliquet tellus iaculis tempus, sollicitudin massa duis
              eleifend egestas turpis sit etiam.
            </p>
          </div>
          <div className=" mb-10 flex flex-col lg:flex-row gap-3">
            <div className="relative lg:ps-10 lg:max-w-[60%] ">
              <span className="lg:absolute z-[-1] top-0 left-[-30px] mb-4 w-[60px] h-[60px] rounded-full flex justify-center items-center  bg-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 fill-primary "
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </span>
              <div>
                <span className="uppercase text-primary font-semibold mb-4 block">
                  our store
                </span>
                <h4 className="text-3xl mb-2 font-semibold">
                  3538 Torrance Blvd, Torrance, CA 90503, USA
                </h4>
                <p className="text-lg">
                  Posuere sagittis ultricies enim massa nisi neque augue in
                  condimentum lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                  dapibus leo.
                </p>
                <Social />
              </div>
            </div>
            <div className="flex flex-col mt-10 w-fit gap-4">
              <Link className="flex items-start gap-3 border-transparent border border-b-gray-400 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="w-4 h-4 mt-2 stroke-primary fill-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">call us</p>
                  <p className="font-semibold">+1 123 456 7890</p>
                </div>
              </Link>
              <Link className="flex items-start gap-3 border-transparent border border-b-gray-400 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-2 stroke-primary fill-primary"
                  fill=""
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                </svg>
                <div className="flex flex-col">
                  <p className="text-primary font-semibold">SUPPORT</p>
                  <p className="font-semibold">support@email.com</p>
                </div>
              </Link>
              <Link className="flex items-start gap-3 border-transparent border border-b-gray-400 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-2 stroke-primary fill-primary"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                  />
                </svg>

                <div className="flex flex-col">
                  <p className="text-primary uppercase font-semibold">sales</p>
                  <p className="font-semibold">sales@email.com</p>
                </div>
              </Link>
              <Link className="flex items-start gap-3 border-transparent border border-b-gray-400 pb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 mt-2 stroke-primary fill-primary"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                </svg>
                <div className="flex flex-col">
                  <p className="text-primary uppercase font-semibold">
                    COMPLAINTS
                  </p>
                  <p className="font-semibold">complaints@email.com</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="container m-auto px-10 lg:grid grid-cols-[1fr_auto] lg:py-[60px] flex-col md:flex-row
        "
        >
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6944536.185077166!2d-7.172660556250001!3d31.80083464999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1705776487460!5m2!1sen!2sma"
              className="border-0 w-full h-full min-h-[400px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <form
            className="shadow-lg w-full md:min-w-[400px] lg:h-[calc(100%+100px)] lg:translate-y-[-50px]  relative flex flex-col p-6 before:absolute before:top-[-30px] before:left-[-30px] before:z-10 before:content-[''] 
          before:w-0 before:h-0
          before:border-primary
          before:border-[30px]
          before:border-x-transparent
          before:border-t-transparent
          before:rotate-[-45deg]"
          >
            <h4 className="text-2xl font-bold text-semi-black mb-3">
              Send Us A Message
            </h4>
            <div className="flex flex-col mt-2">
              <label htmlFor="name">
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                className="border border-semi-black mt-2 px-4 py-1"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="border border-semi-black mt-2 px-4 py-1"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="massege">
                Massege <span className="text-red-600">*</span>
              </label>
              <textarea
                cols="10"
                className="border border-semi-black mt-2"
                id="massege"
                rows="4"
              ></textarea>
            </div>
            <button className="px-6 py-2 bg-primary text-semi-black w-fit uppercase mt-3 ">
              Submit
            </button>
          </form>
        </div>
        <SeeLastCol />
      </div>
    </>
  );
};

// const
const Social = () => {
  return (
    <div className=" flex items-center mt-3 justify-start gap-3">
      <Link className="">
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="black"
        >
          <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
        </svg>
      </Link>
      <Link className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4"
          fill="black"
        >
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg>
      </Link>
      <Link className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4"
          fill="black"
        >
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
        </svg>
      </Link>
      <Link className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-4 h-4"
          fill="black"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </svg>
      </Link>
      <Link className=" group uppercase px-3 py-1  ms-5 flex items-center gap-3 font-bold border-2 border-transparent hover:border-primary hover:text-primary group-hover:fill-primary ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke=""
          className="w-5 h-5 group-hover:stroke-primary  group-hover:fill-primary inline-block rotate-[-45deg] hover:fill-primary "
        >
          <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
        Get direction
      </Link>
    </div>
  );
};

export default Contact;
