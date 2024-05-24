"use client";

import { useEffect, useState } from "react";
import signUpAction from "../app/api/action/signUpAction";
import PopUp from "./Popup";

export default function () {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [mobile, setMobile] = useState<string>("");
  useEffect(() => {
    if (!isModalOpen) {
      setMessage("");
    }
  }, [isModalOpen]);

  const signUpHandler = async () => {
    try {
      const res = await signUpAction({ name, email, password, mobile });
      if (res) {
        setMessage("SignUp is Successful!");
        setIsSuccess(true);
      } else {
        setMessage("Error creating user!");
        setIsSuccess(false);
      }
    } catch (err) {
      setMessage("Error while SignUp! Please try again later!!");
      setIsSuccess(false);
      console.log(err);
    } finally {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div>
        <div>
          <p>Full Name</p>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=""
            placeholder="Enter name"
          ></input>
        </div>
        <div>
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=""
            placeholder="Enter Email"
          ></input>
        </div>
        <div>
          <p>Mobile Number</p>
          <input
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            className=""
            placeholder="Enter Email"
          ></input>
        </div>
        <div>
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=""
            type="password"
            placeholder="Enter Password"
          ></input>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="p-3 bg-blue-600 rounded-xl"
            onClick={signUpHandler}
          >
            Sign Up
          </button>
        </div>
      </div>
      {isModalOpen ? (
        <PopUp
          setIsModalOpen={setIsModalOpen}
          message={message}
          isSuccess={isSuccess}
        />
      ) : (
        ""
      )}
    </>
  );
}
