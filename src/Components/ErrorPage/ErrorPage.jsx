import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
        <div className="text-center mt-52 ">
            <h1 className="mb-5 text-5xl">Oops !!!</h1>
            <p>Im Sorry Babe its Not Your Place..</p>
            <Link to='/'><button className="btn mt-5">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;