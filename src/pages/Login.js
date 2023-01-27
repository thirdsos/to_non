import { useRef } from "react";
import React from "react";
import Home from "../App"
import { useNavigate } from "react-router-dom";

function Login() {
    // const [inputs, setInputs] = useState({});

    // const handleChange = (event) => {
    // const name = event.target.name;
    // const value = event.target.value;
    // setInputs(values => ({...values, [name]: value}))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log(inputs);
    // }

    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emaildata")
    const getPassword=localStorage.getItem("passdata")

    const handleSubmit=()=>{
        if(email.current.value !==""&&password.current.value !==""){
            localStorage.setItem("emaildata",email.current.value)
            localStorage.setItem("passdata",password.current.value)
        }
    }
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/'; 
        navigate(path);
    }
    // const getEmail=localStorage.getItem("emaildata")
    // const getPassword=localStorage.getItem("passdata")

    // if(getEmail!==''&&getPassword!=='')
        return ( 
            <div className="  m-[200px]  text-center items-center">
            { 
                getEmail&&getPassword?
                <Home/>:
                    <form onSubmit={handleSubmit}  className=" mx-[400px] my-[200px] w-[400px]h-[400px] font-[10px] text-center  border-sky-500 border-4  justify-items-center">
                        <h1>Login</h1>
                        <div className=" m-6 border-solid " >
                            <input className=" border w-[40%] "
                                ref={email}
                                type="text" 
                                name="email" 
                                // value={inputs.email || ""} 
                                // onChange={handleChange}
                                placeholder="Email"
                                />
                        </div>
                        <div className=" m-6 border-solid" >
                            <input className=" border w-[40%] "
                                ref={password}
                                type="password" 
                                name="password" 
                                // value={inputs.password || ""} 
                                // onChange={handleChange}
                                placeholder="Password"
                                />
                        </div>
                        
                        <div className="border-spacing-11  " >
                            <button onClick={routeChange}
                                type="submit" 
                                value="submit"
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-4" >
                                    Submit
                            </button>
                            <button 
                                type="reset" 
                                value="reset"
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-4">
                                    Reset
                            </button>
                        </div>
                        
                    </form>
                }
            </div>

         );
}

export default Login;