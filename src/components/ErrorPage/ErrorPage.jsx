import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="bg-slate-100 w-[400px] mx-auto ">
            <h1>Oops!!</h1>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <br></br>
                    <Link to="/"><button className="p-4 bg-slate-300 rounded-2xl">Home</button></Link>
                    
                    </div>
            }
            
        </div>
    );
};

export default ErrorPage;