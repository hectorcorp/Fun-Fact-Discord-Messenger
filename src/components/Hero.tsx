import { Link } from "react-router-dom";


const Hero = () => {
    return(
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold">Hello there</h1>
                <p className="py-6">
                    Welcome to my fun fact discord messenger that sends fun facts to any
                    chosen chat through your discord account.
                </p>
                <Link to="/messenger" className="btn btn-primary text-sm">Get Started</Link>
            </div>
        </div>
    </div>
    );
};

export default Hero;