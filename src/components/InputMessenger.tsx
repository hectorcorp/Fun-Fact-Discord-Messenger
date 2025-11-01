import { useState } from "react";
import { ffPostRequest } from "../utils/ffPostRequest";


const InputMessenger = () => {
    const [URLValue, setURL] = useState<string>("");
    const [AUTHValue, setAUTH] = useState<string>("");
    

    const handleclick = () => {
        ffPostRequest(URLValue, AUTHValue);
    }

    return(
        <div className="card bg-base-300 w-3/10 h-3/5 shadow-sm p-5 gap-5">
            <h1 className="card-title justify-center text-2xl font-bold">Fun Fact Discord Messenger</h1>

            <h1>URL</h1>

            <input 
            type="text" 
            placeholder="Type here" 
            className="input w-full" 
            value={URLValue}
            onChange={(e) => setURL(e.target.value)}
            />    
            
            <h1>Authorization</h1>

            <input 
            type="text" 
            placeholder="Type here" 
            className="input w-full" 
            value={AUTHValue}
            onChange={(e) => setAUTH(e.target.value)}
            />

            <div className="divider"/>

            <div className="btn mt-auto" onClick={handleclick} >Submit</div>
        </div>    
    );
};


export default InputMessenger;