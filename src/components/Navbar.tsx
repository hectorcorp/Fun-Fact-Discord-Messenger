import { Link } from "react-router-dom";

const Navbar = () => {
    return(
    <div className="navbar bg-base-200 shadow-sm">
        <div className="flex w-full justify-center items-center">    
            <Link to="/" className="btn btn-ghost text-xl">Fun Fact Discord Messenger</Link>
            <Link to="/about" className="btn btn-ghost text-sm">About</Link>
            <Link to="/guide" className="btn btn-ghost text-sm">Guide</Link>
        </div>
    </div>    
    );
};
export default Navbar;