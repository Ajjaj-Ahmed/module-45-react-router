import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
  const post = useLoaderData();
  const {id, title, body} = post;
  return (
    <div>
      <h2>Id : {id}</h2>
      <h2>Title : {title}</h2>
      <h2>Body : {body}</h2>
    </div>
  );
};

export default PostDetails;