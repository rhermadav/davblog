import React,{useEffect} from 'react'
import {  useSelector,useDispatch } from "react-redux";
import {singlepost} from '../Actions/post'
import '../aos/aos.css'
import {Link} from 'react-router-dom'

const ShowPost = (props) => {
    const dispatch = useDispatch();
    const postDetails = useSelector((state) => state.postDetails);
    const { loading, post, error } = postDetails;

    useEffect(() => {
        console.log(props.match.params.id)
        dispatch(singlepost(props.match.params.id));
        return () => {
          //
        };
      }, []);

    return (
       
            <div class="container">
                {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
                  <div class="col-md-4 landing-blog-post"  >
                    <img src="images/images/blog_post_1.jpg" alt="blog post" class="blog-post-thumbnail" />
                    <p class="blog-post-category">{post.title}</p>
                    <h4 class="blog-post-title">{post.description}</h4>              
                 </div>   
      )}                   
               
            </div>
       
    )
}

export default ShowPost;

