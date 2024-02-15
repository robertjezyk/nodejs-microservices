const buildContent = (comment) => {
  switch (comment.status) {
    case "approved":
      return comment.content;
    case "pending":
      return "This comment is awaiting moderation";
    case "rejected":
      return "This comment has been rejected";
    default:
      return "";
  }
};

const CommentList = ({ comments }) => (
  <>
    <span>{comments.length} comments</span>
    <ul className="">
      {comments.map((comment) => {
        return <li key={comment.id}>{buildContent(comment)}</li>;
      })}
    </ul>
  </>
);

export default CommentList;
