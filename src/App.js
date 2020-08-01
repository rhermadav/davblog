import React from "react";
import { Router,Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import history from './history';
import Login from "./component/login";
import Register from "./component/register";
import Post from "./component/post";
import ShowPost from "./component/showpost";
import Addpost from "./component/addPosts";
import Editpost from "./component/editPost";
import './index.css';


function App(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (
    <div>
          <Router history={history}>
            <Switch>
                <Route path='/' exact component={Post} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register}/>
                <Route path='/addpost' exact component={Addpost}/>
                <Route path='/showpost/:id' exact component={ShowPost}/>
                <Route path='/editpost/:id' exact component={Editpost}/>
            </Switch>
          </Router>
    </div>   
  );
}

export default App;
