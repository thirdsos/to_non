import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setCredentials } from "../slice/user";
import { Navigate } from "react-router-dom";

function Login() {
  //   const email = useRef();
  //   const password = useRef();
  //   const getEmail = localStorage.getItem("emaildata");
  //   const getPassword = localStorage.getItem("passdata");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = () => {
  //     if (email.current.value !== "" && password.current.value !== "") {
  //       localStorage.setItem("emaildata", email.current.value);
  //       localStorage.setItem("passdata", password.current.value);
  //     }
  //   };
  //   let navigate = useNavigate();
  //   const routeChange = () => {
  //     let path = "/";
  //     navigate(path);
  //   };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <div className="  m-[200px]  text-center items-center">
      <div className=" mx-[400px] my-[200px] w-[400px]h-[400px] font-[10px] text-center  border-sky-500 border-4  justify-items-center">
        <h1>Login</h1>
        <div className=" m-6 border-solid ">
          <input
            className=" border w-[40%]  focus:outline-none "
            value={email}
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className=" m-6 border-solid">
          <input
            className=" border w-[40%]  focus:outline-none "
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="border-spacing-11  ">
          <button
            onClick={() => {
              dispatch(
                setCredentials({
                  email: email,
                  password: password,
                  token: "SBJVJHASIOPDNLLL",
                })
              );
            }}
            type="submit"
            value="submit"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-4"
          >
            Login
          </button>

          <button
            type="reset"
            value="reset"
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-4"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
