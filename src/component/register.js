import React, { useState, useEffect} from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Actions/user";

 const  Register = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setpasswordCheck] = useState();
  const [firstname,setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [username, setUsername] = useState();
  const dispatch = useDispatch();
  
  const userRegister = useSelector( state => state.userRegister);
  const {loading ,userInfo,error } = userRegister;
 
  useEffect(() => {
    if (userInfo) {
      props.history.push("/login");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submit = async (e) => {
    e.preventDefault();
    dispatch(registerUser(firstname,lastname,username,email,password,passwordCheck));
  };

  return (
    <div className="page form">
      <h2>Create an Account</h2>
      <form onSubmit={submit}>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        <label htmlFor="email">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="passwordCheck">RePassword</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setpasswordCheck(e.target.value)}
        />
        <label htmlFor="firstname">First Name</label>
        <input
          id="login-password"
          type="text"
          onChange={(e) => setFirstname(e.target.value)}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          id="login-password"
          type="text"
          onChange={(e) => setLastname(e.target.value)}
        />
        <label htmlFor="username">Username</label>
        <input
          id="login-password"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" value="Register" />
        <Link to='/login'> Already  have an have an account?</Link>
      </form>
    </div>
  );
}

export default Register;