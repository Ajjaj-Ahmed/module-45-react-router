import { Link, useNavigate } from "react-router-dom";
const User = ({user}) => {
  const {id,username,phone,email}=user

  // Create a navigate button
  // 1. useNavigate()
  // 2. declare a arrow function and call the navigate
  // 3. set the arrow function on onclick

  const navigate = useNavigate()

  const handleUserdetails = ()=>{
    navigate(`/user/${id}`)
  }

  const userStyle = {
    border:'2px solid red',
    borderRadius: '10px',
    padding :'10px',
  }
  return (
    <div style={userStyle}>
      <h2>Name : {username}</h2>
      <h2>Phone : {phone}</h2>
      <h2>Email : {email}</h2>
      <Link to={`/user/${id}`}>Show Details</Link> <br />
      <button className="p-3 bg-blue-300 rounded-xl border-3" onClick={handleUserdetails}>User Details</button>
    </div>
  );
};

export default User;