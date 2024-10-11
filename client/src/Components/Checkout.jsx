import { useDispatch, useSelector } from "react-redux";
import { orders } from "../redux/selectors";
import { useMemo, useState } from "react";
import countryList from "react-select-country-list";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../constants";
import { clearCard } from "../redux/reducers/cardReducer";
function Checkout() {
  const dispatch = useDispatch();
  const options = useMemo(() => countryList().getData(), []);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {},
  });
  const [isSent, setIsSent] = useState("");
  const orderss = useSelector(orders);
  const formSubmit = async (user) => {
    const order = [...orderss].map((ele) => {
      return {
        id: ele.id,
        quantity: ele.quantity,
        totalPrice: ele.quantity * ele.price,
      };
    });
    let total = 0;
    const orderP = order.reduce((total, item) => {
      return total + item.totalPrice;
    }, 0);

    const completeOrder = { user, order, orderP };
    console.log(completeOrder);

    const result = await fetch(`${BASE_URL}/orders`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(completeOrder),
    });
    if (await result.status) {
      dispatch(clearCard());
      document.querySelector("form").reset();
      setIsSent("Your order has been placed successfully.");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // useEffect(() => {
  //   reset({
  //     data: "test",
  //   });
  // }, [isSubmitSuccessful]);

  return (
    <div>
      <div className="bg-gray-50 container lg:px-40 lg:py-8 lg:pb-20 px-8 py-8">
        <p className="p-2 text-center m-auto max-w-[400px] rounded-md bg-green-500 text-white">
          {isSent}
        </p>
        <form
          className="bg-white  lg:grid grid-cols-2  "
          onSubmit={handleSubmit(formSubmit)}
        >
          <div className="  col-span-1 ">
            <div className="p-8  ">
              <h3 className="pb-4">Customer information</h3>
              <input
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                type="text"
                name="email"
                className={`bg-white border border-slate-700 rounded-md text-gray-900 w-full focus:border-slate-700 px-3 py-3 ${
                  errors.email && "border-red-500"
                }`}
                placeholder="Email Address"
              />
            </div>
            <div className="p-8">
              <h3>Billing details</h3>
              <div className=" flex-wrap grid gap-4 grid-cols-2 ">
                <input
                  {...register("firstName", { required: true })}
                  name="firstName"
                  type="text"
                  className={` bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.firstName && "border-red-500"
                  }`}
                  placeholder="First name"
                />
                <input
                  {...register("lastName", { required: true })}
                  name="lastName"
                  type="text"
                  className={`bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.lastName && "border-red-500"
                  }`}
                  placeholder="Last name"
                />
                <input
                  {...register("companyName", { required: true })}
                  name="companyName"
                  type="text"
                  className={` col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.companyName && "border-red-500"
                  }`}
                  placeholder="Company name"
                />
                <select
                  {...register("country", { required: true })}
                  name="country"
                  className={` col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.country && "border-red-500"
                  }`}
                >
                  <option value="morocoo">morocoo</option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

                <input
                  {...register("address")}
                  name="address"
                  type="text"
                  className={` col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.address && "border-red-500"
                  }`}
                  placeholder="House number and Street name"
                />
                <input
                  {...register("apartment")}
                  name="apartment"
                  type="text"
                  className={` col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.apartment && "border-red-500"
                  }`}
                  placeholder="Apartment,suite,unit,ect.(optional)"
                />
              </div>
              <div className=" flex-wrap grid gap-4 py-4 grid-cols-3 ">
                <input
                  {...register("city")}
                  name="city"
                  type="text"
                  className={` col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.city && "border-red-500"
                  }`}
                  placeholder="Town/City"
                />

                <input
                  {...register("zip")}
                  name="zip"
                  type="text"
                  className={` col-span-2 bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3 ${
                    errors.zip && "border-red-500"
                  }`}
                  placeholder="ZIP Code"
                />
              </div>
              <input
                {...register("phone", {
                  required: "This is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
                name="phone"
                type="text"
                className="w-full  bg-white border border-slate-700 rounded-md text-gray-900 px-3 py-3"
                placeholder="Phone"
              />
              <span className="text-red-500">
                {errors.phone && errors.phone.message}
              </span>
            </div>

            <div className="p-8 ">
              <h3>Additional information</h3>
              <textarea
                {...register("notes")}
                name="notes"
                className={`p-1  w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 ${
                  errors.notes && "border-red-500"
                }`}
                placeholder="Notes about your order,e.g. speacial notes for delivery"
                rows="2"
              ></textarea>
              <p>Have a coupon?</p>
            </div>
          </div>
          <OrderTotal orderss={orderss} />
          <div className="p-8 pb-16 ">
            <h3 className="pb-16">Payment</h3>
            <button
              disabled={isSubmitting}
              type="submit"
              className="flex items-center justify-center bg-primary  w-full   px-10 py-2 text-black hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              {isSubmitting ? "Loading..." : "PLACE ORDER"}
            </button>
          </div>
        </form>
      </div>
      <footer className="bg-semi-black  py-4 lg:grid grid-cols-2 ">
        <div className=" text-center text-white mb-4 l p-[30px] ">
          Copyright © 2024 Online Furniture Store
        </div>
        <div className=" text-center text-white p-[30px]">
          Powered by Online Furniture Store
        </div>
      </footer>
    </div>
  );
}

const OrderTotal = ({ orderss }) => {
  const formatNumber = (number) => {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  };
  const total = formatNumber(
    orderss.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0)
  );
  return (
    <div className=" bg-white px-6 py-8  ">
      <h3 className="pb-4">Your order</h3>
      <table className="w-5/6 text-sm text-left border rounded-t-lg">
        <thead className="text-md font-medium text-gray-400 ">
          <tr>
            <th className="px-6 py-3">Product</th>
            <th className="px-6 py-3">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {orderss &&
            orderss.map((order) => {
              return <OrderTotalItem key={order.id} order={order} />;
            })}
        </tbody>
        <tfoot>
          <tr className="border">
            <th className="px-6 py-4 font-medium text-gray-500 ">Subtotal</th>
            <td className="px-6 py-4">MAD {total}</td>
          </tr>
          <tr className="border">
            <th className="px-6 py-4 text-xl font-bold text-gray-500 ">
              Total
            </th>
            <td className="px-6 py-4 text-xl font-bold text-gray-500">
              MAD {total}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const OrderTotalItem = ({ order }) => {
  const formatNumber = (number) => {
    return number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
    });
  };

  return (
    <tr className=" border  ">
      <th className="px-6 py-4 font-medium text-gray-600 ">
        {`${order.name} × ${order.quantity}`}
      </th>
      <td className="px-6 py-4">
        MAD {formatNumber(order.price * order.quantity)}
      </td>
    </tr>
  );
};

export default Checkout;
