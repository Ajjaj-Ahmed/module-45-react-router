import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {

  const user = useLoaderData();

  // create back button

  const navigate = useNavigate();
  const handleGoBack = ()=>{
    navigate(-1);
  }

  const {name,website} = user;
  return (
    <div>
      <h2>details about user : {name}</h2>
      <h2>Visite us : {website}</h2>
      <button className="p-3 bg-purple-800 text-white rounded-xl" onClick={handleGoBack}>Go Back!</button>
    </div>
  );
};

export default UserDetails;