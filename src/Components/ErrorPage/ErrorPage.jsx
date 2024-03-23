import { useNavigate, useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const ErrorPage = () => {
   
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate()

  const handleErrowPage = ()=>{
    navigate(-1)
  }
  return (
    <div>
      <h2>Oops!!</h2>
      <p>{error.statusText || error.message}</p>
      {
        error.status === 404 && 
        <div>
          <h2>website not found</h2>
        </div>
      }
      <button className="p-3 bg-green-800 rounded-xl text-white" onClick={handleErrowPage}>Go Back</button>

     <Link to={'/'}>Home</Link>
    </div>
  );
};

export default ErrorPage;