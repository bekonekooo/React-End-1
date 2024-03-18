import { Link } from "react-router-dom";
import "./index.css"
import { useState } from "react";

const Navbar =({setFilter})=>{
    const [inputValue, setInputValue] = useState("");
  
    const handleChange=(e)=>{
        const value=e.target.value
        setInputValue(value)
        setFilter(value)
    }
    return(
        <nav className="navbar">
            <h1>Berkays blog</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/create">New BLOG</Link>
                <input placeholder="search-bar"
                type="text"
                 onChange={handleChange}
                    value={inputValue}
                 />
               
            </div>
        </nav>
    )
 
}
export default Navbar;