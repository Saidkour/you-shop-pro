import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../constants";
import { getUser } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../hocks/useFetch";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState();
  const userCurent = useSelector(getUser) || undefined;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      email: "admin@admin.admin",
      password: "admin1234",
    },
  });
  const { data: data, loading: loadind, err: err } = useFetch("/user");
  useEffect(() => {
    if (data?.user) {
      dispatch({ type: "set_user", payload: data?.user });
      navigate("/dashboard");
    }
  }, [data?.user]);

  const onSubmit = async (values) => {
    try {
      const result = await fetch(`${BASE_URL}/user/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(values),
      });
      if (result.status === 200) {
        const { user } = await result.json();
        dispatch({ type: "set_user", payload: user });
        navigate("/dashboard");
      }
      if (result.status === 401) {
        setErrorMessage("Email or Password Invalid");
      }
    } catch (err) {
      console.log("login is not ok", err);
    }
  };
  return (
    <>
      {userCurent ? (
        ""
      ) : (
        <div className="container relative h-[100vh] flex m-auto justify-center place-items-center p-10">
          <div className='absolute top-0 left-0 w-full h-full bg-[url("/headerimg.jpg")] opacity-[0.87]  bg-cover bg-center z-[-1]'></div>
          <div className="absolute bg-black w-full h-full left-0 right-0 bottom-0 opacity-[0.57] bg-cover z-[-1] bg-center top-0"></div>
          <div className=" w-[600px] md:w-[500px] shadow-sm  shadow-primary  backdrop-blur-sm">
            <h4 className="text-center text-primary font-bold p-4 "> LOGIN </h4>
            <p className="text-center text-red-600">
              {errorMessage ? errorMessage : ""}
            </p>
            <form
              className="mb-0 space-y-6  p-9"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                {errors.alert && (
                  <p className="mt-1 mb-2 p-2 text-center bg-red-200  text-red-600 text-sm">
                    {errors.alert.message}
                  </p>
                )}
                <label
                  htmlFor="email"
                  className="flex text-sm font-medium text-primary"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email@example.com"
                    className="w-full border bg-transparent border-primary   px-3 py-2  "
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-600 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="flex text-sm font-medium text-primary"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    name="password"
                    type="password"
                    placeholder="********"
                    className="w-full border bg-transparent focus:border-none  border-primary   px-3 py-2  shadow-sm"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.password && (
                    <p className="mt-1 text-red-600 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent  shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary"
                >
                  {isSubmitting ? (
                    <svg
                      className="m-auto "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#ffffff"
                      width={20}
                      height={20}
                    >
                      z
                      <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
                    </svg>
                  ) : (
                    "login"
                  )}{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
