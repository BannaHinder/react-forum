
const Comment = ({comment}) => {

  return (
  <article className="comment">
    <h3>#{comment.id} {comment.name}</h3>
    <p>{comment.body}</p>
    <div>
      <p>By: {comment.email}</p>
    </div>
  </article>
  )
};

export default Comment;
