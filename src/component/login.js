import React, { useState, useContext, useEffect } from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signinUser} from '../Actions/user';

 const  Login = (props) => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const userSignin = useSelector(state => state.userSignin);
  const {loading, userInfo, error} = userSignin;
  

  useEffect(() => {
    if (userInfo) {
      props.history.push("/addpost");
    }
    return () => {
      //
    };
  }, [userInfo]);
  

  const submit = async (e) => {
    e.preventDefault();
    dispatch(signinUser(email,password));
  };

  return (
    <div className="page form">
        {error && <div>{error}</div>}
        {loading && <div>loading</div>}
      <h2>Log in</h2>
      <form onSubmit={submit}>
        <label htmlFor="login-e
        mail">Email</label>
        <input
          id="login-email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="Login" />
        <Link to='/Register'> Dont have an have an account?<input type="submit" value="Register" /></Link>
      </form>
    </div>
  );
}

export default Login;