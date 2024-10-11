import React, { useEffect } from "react";
import { BASE_URL } from "../constants";

const SignUp = () => {
  const handleSign = async () => {
    const obj = {
      email: "user@user.com",
      password: "admin1234",
      lastName: "user1",
      firstName: "user",
    };
    try {
      const result = await fetch(`${BASE_URL}/user`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(obj),
      });
      if (result.status === 200) {
        console.log("sign is ok");
      }
    } catch (err) {
      console.log("sign is not ok");
      console.log(err);
    }
  };

  return (
    <div className="p-5">
      SignUp{" "}
      <button className="bg-primary p-2 " onClick={handleSign}>
        sign up
      </button>
    </div>
  );
};

export default SignUp;
