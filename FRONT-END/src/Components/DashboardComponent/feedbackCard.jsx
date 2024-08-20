import React, { useState } from "react";
import { DestroyFeedback, UpdateFeedback } from "../../API/feedback";
import { AiFillLike } from "react-icons/ai";

export default function FeedbackCard({ feedback, fetchFeedback }) {
  const [done, setDone] = useState(false);
  const status = "post";

  const handleUpdateStatus = async (id) => {
    try {
      await UpdateFeedback(id);
      fetchFeedback();
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDeletFeedback = async (id) => {
    try {
      await DestroyFeedback(id);
      fetchFeedback();
      setDone(true);
      setTimeout(() => {
        setDone(false);
      }, 3000);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div>
        <>
          {done ? (
            <div className="mb-4 bg-green-200 p-3 inline-block m-auto absolute lg:top-6 top-1 right-10 rounded-full loader">
              <AiFillLike className="fill-green-600  text-3xl"/>
            </div>
          ) : (
            ""
          )}
        </>
      </div>
      {feedback &&
        feedback.map((item, key) => {
          return (
            <div
              key={key}
              className={
                item.status === status
                  ? "border mb-4 py-2 px-4 w-full lg:w-10/12 m-auto bg-gray-100 hover:bg-white hover:shadow-xl transition-all hover:scale-105 duration-700"
                  : "border  border-red-100 w-full lg:w-10/12 mb-4 py-2 px-4  m-auto bg-gray-50"
              }
            >
              <div
                className={
                  item.status === status
                    ? "font-semibold text-blue-800 cursor-pointer hover:underline transition-all inline-block"
                    : "text-gray-300  line-through font-semibold cursor-pointer hover:underline transition-all inline-block"
                }
              >
                {item.user_id}
              </div>
              <div className="my-2 ml-3">
                <span
                  className={
                    item.status === status
                      ? "font-light text-sm"
                      : " text-gray-300 line-through font-light text-sm"
                  }
                >
                  {item.message}
                </span>
              </div>
              <div className=" flex justify-between items-center">
                <span
                  className={
                    item.status === status
                      ? "font-light text-gray-400 text-sm"
                      : " text-gray-300 line-through font-light  text-sm"
                  }
                >
                  {new Date(item.created_at).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <div className="flex">
                  <button
                    onClick={() => handleUpdateStatus(item.id)}
                    className={
                      item.status === status
                        ? "bg-green-600 text-green-50 px-3 py-1 rounded hover:bg-green-500 transition-all hover:scale-105 duration-700"
                        : " bg-blue-400 text-blue-50 px-2 py-1 rounded "
                    }
                  >
                    {item.status}
                  </button>
                  <button
                    onClick={() => handleDeletFeedback(item.id)}
                    className="bg-red-600 ml-2 text-red-50 px-2 py-1 rounded hover:bg-red-500 transition-all hover:scale-105 duration-700"
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
