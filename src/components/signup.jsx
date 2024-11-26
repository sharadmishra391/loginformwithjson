import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../components/signup.css'
const Signup = () => {
     const [input, setInput] = useState({});

     const navigate=useNavigate();

     const gotologin=()=>{
      navigate('/login')
     }



     const handleInput = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       setInput((values) => ({ ...values, [name]: value }));
       console.log(input);
     };
   const handleSubmit = () => {
     let api = "http://localhost:3000/crecedentials";
     axios.post(api, input).then((res) => {
       console.log(res);
       alert("added succesfully")
     });
   };


  return (
    <>
      <h1 style={{textAlign:"center", backgroundColor:"whitesmoke"}}>This is SignUp Page</h1>
      <br></br>

      <div className="signup">
        <h1>Signup Form</h1>
        <br></br>
        Please enter your User name:
        <input
          type="text"
          name="name"
          placeholder="Username"
          onChange={handleInput}
        />
        <br></br>
        <br />
        Please enter your email:
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleInput}
        />
        <br />
        <br />
        Please enter your password:
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleInput}
        />
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        <br/>
        <br/>
        Already registered?<button onClick={gotologin}>Login</button>
        
      </div>
    </>
  );
};
export default Signup;
