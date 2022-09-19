import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Comment from "../components/Comment";
import PageNotFound from "./PageNotFound";

const Post = () => {
  let [comments, setComments] = useState(null);
  let [post, setPost] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    console.log('useeffect was fired')
    if (comments == null && Number.isFinite(parseInt(id))) {
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res) => {
          const data = res.data;
          setComments(data);
        });
      console.log('made axios call for comment')
      }
        if(post == null && Number.isFinite(parseInt(id))){
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
          const data = res.data;
          setPost(data);
        }); 
        console.log('made axios call for post')
    }
  }, []);


console.log("Post-page-component updated")
//Varför uppdateras denna komponent så sjukt många ggr
//ahhh är det varje gång den renderar en comment, i see i see


  return (
    <>
      <main className="post-page">

        {post && (
          <section className="title">
            <h2>Post # {id}</h2>
           <p><b>Title: {post.title}</b></p> <p>" {post.body} "</p>
          </section>
        )}
        <section>
        {comments && <h2>Comments:</h2>}
        {comments && ( 
          comments.map((comment, index) => { 
            return ( <Comment comment={comment} key={index}/>)
          }))}
          </section>
      </main>
      {(comments && post == null) && <PageNotFound/>}
    </>
  );
};

export default Post;
