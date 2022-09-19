import { useEffect, useState } from "react";
import axios from 'axios'
import Posts from "./Posts";

const PostList = () => {
    let [postsArr, setPostsArr] = useState(null)
    //If you only want to run the function given to useEffect after the initial render, you can give it an empty array as second argument.
      
    useEffect(() => {
        if (postsArr==null) {
          getPosts();
        }
      }, []);
    
    const getPosts = ()=> {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
          const posts = res.data;
          setPostsArr( posts );
        })
      }



    return ( 
        <>
        <section>
        {postsArr && postsArr.map((post, index)=> {return (
            <Posts title={post.title} id={post.id} key={index}/>
        )})}
        </section>
        </>
     );
}
 
export default PostList;