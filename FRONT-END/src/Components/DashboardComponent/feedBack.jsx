import React, { useEffect, useState } from "react";
import { VscFeedback } from "react-icons/vsc";
import FeedbackCard from "./feedbackCard";
import { GetFeedback, GetFeedbackByStatus } from "../../API/feedback";

export default function FeedBack() {
  const [feedback, setFeedback] = useState([]);
  const [messageLoading, setMessageLoading] = useState();
  const [selectedValue, setSelectedValue] = useState("");
  const status = "post"


  const handleCHangeSelect = (e) => {
    setSelectedValue(e.target.value);
  };

  console.log(selectedValue);

  const fetchFeedback = async () => {
    try {
      setMessageLoading("loading...");

      // if selected any status
      if (selectedValue) {
        const response = await GetFeedbackByStatus(selectedValue);
        setFeedback(response);

        if (!response.ok) {
          setMessageLoading("No feedback");
        }
      } else {
        const response = await GetFeedback();
        console.log(response);
        setFeedback(response);

        if (!response.ok) {
          setMessageLoading("No feedback");
        }
      }

    } catch (error) {
      console.log("connection issue !");
      setMessageLoading("connection issue !");
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [selectedValue]);

  return (
    <div className="lg:mt-0 mt-10">
      <div className="bg-primary rounded flex justify-between items-center py-2 px-3">
        <span className="font-semibold tracking-wider text-white lg:text-xl">
          Feedback
        </span>
        <span className="flex items-center">
          <VscFeedback className="text-xl fill-white mr-2" />{" "}
          <span className="text-xl text-white border-l border-white px-2">
            {feedback.length}
          </span>
        </span>
        <select
          onChange={handleCHangeSelect}
          className="px-5 py-2 rounded outline-yellow-500"
          name="status"
          id="status"
        >
          <option value="">default</option>
          <option value="post">new</option>
          <option value="posted">posted</option>
        </select>
      </div>
      {feedback && feedback.length >= 1 ? (
        <div className="overflow-y-auto lg:h-[80vh] h-[73vh] mt-2 p-4 lg:p-4 ">
          <FeedbackCard feedback={feedback} fetchFeedback={fetchFeedback}  />
        </div>
      ) : (
        <div className="flex items-center justify-center text-primary h-[70vh] text-2xl ">
          {messageLoading}
        </div>
      )}
    </div>
  );
}
