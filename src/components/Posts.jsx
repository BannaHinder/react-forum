import { Link } from "react-router-dom";

const Posts = ({title, id}) => {
    

    return ( 
        <article>
            <Link to={`/post/${id}`} ><h4 className="title">{id}. {title}</h4></Link>
        </article>
     );
}
 
export default Posts;