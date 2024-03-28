import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-slate-100 rounded-2xl w-[400px] mx-auto text-center mt-[150px] p-10 text-black ">
            <h1>Oops!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <br></br>
                    <Link to="/"><button className="p-4 bg-[#59C6D2] rounded-2xl">Home</button></Link>
                    
                    </div>
            }
            
        </div>
    );
};

export default ErrorPage;