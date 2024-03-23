import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
  const {id,title,body} = post;

  const navigate = useNavigate()
  // Working on Button
  const handleShowDetails = ( ) =>{
      navigate(`/post/${id}`)
  }

  return (
    <div className='post'>
      <h2>Id: {id}</h2>
      <h2>Title : {title}</h2>
      <h2 className='body'>Body : {body}</h2>
      <Link to={`/post/${id}`}><button className='text-3xl bg-green-400 p-2 border-2 m-3 rounded-lg'>Show Details</button></Link>
      <button className='p-3 bg-purple-400 border-3 rounded-xl' onClick={handleShowDetails}>Show Details Button </button>
    </div>
  );
};

export default Post;