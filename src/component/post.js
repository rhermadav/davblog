import React,{useEffect} from 'react'
import {  useSelector,useDispatch } from "react-redux";
import {listPost} from '../Actions/post'
import '../aos/aos.css'
import {Link} from 'react-router-dom'

const Post = () => {
    const dispatch = useDispatch();
    const postList = useSelector((state) => state.postList);
    const { loading, posts, error } = postList;

    useEffect(() => {
        
        dispatch(listPost());
        return () => {
          //
        };
      }, []);

    return (
        <section class="edica-landing-section edica-landing-blog">
            <div class="container">
                <h4 class="edica-landing-section-subtitle"  >Blog posts</h4>
                <h2 class="edica-landing-section-title"  >Check our app latest blog post <br/> for more update.</h2>
                <div class="row">
                {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
          <ul>
              
              {posts.map((post) => (
                  <li key={post._id}>
                  <div class="col-md-4 landing-blog-post"  >
                    <img src="images/images/rectangle.png" alt="blog post" class="blog-post-thumbnail" />
                    <p class="blog-post-category">{post.title}</p>
                    <h4 class="blog-post-title">{post.description}</h4>
                    <Link to={`/showpost/${post._id}`} class="blog-post-link">Learn more</Link>
                 </div>
                 </li>
              ))}    
          </ul>
      )}                   
                </div>
            </div>
        </section>
    )
}

export default Post;