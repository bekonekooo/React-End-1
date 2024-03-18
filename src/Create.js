import { useState } from "react";
import { useNavigate} from "react-router-dom"
import {  useDispatch } from "react-redux";

const Create=()=>{

    const [title ,setTitle]=useState("");
    const [body ,setBody]=useState("");
    const [isPending,setIsPending]=useState(false)
    const navigate=useNavigate()
    const dispatch=useDispatch();


    const handleSubmit=(e)=>{
            e.preventDefault();
            const blog={title,body};
            setIsPending(true)

            fetch("http://localhost:3005/blogs",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(blog)
            }).then(()=>{
                console.log("blog added")
                setIsPending(false);
                dispatch({ type: 'ADD_BLOG', payload: blog });
                setTitle('');
                setBody('');
                navigate("/")
            })
           
    }

    return(
<div className="create">
    <h2>ADD NEW BLOG</h2>
    <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
        onChange={(e)=>setTitle(e.target.value)}
        value={title}
        type="text"
        required
        />
         <label>Blog body:</label>
        <textarea required
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        ></textarea>

        {!isPending &&  <button>Add Blog</button>}
        {isPending &&  <button>Adding blog...</button>}
    </form>
</div>
    );
}
export default Create