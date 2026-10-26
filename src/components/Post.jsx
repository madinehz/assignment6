const postStyle = {
  border: "1px solid #d0d7de",
  borderRadius: "8px",
  padding: "12px 16px",
  margin: "12px 0",
};
function Post({ title, body }) {
  return (
    <article style={postStyle}>
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default Post;