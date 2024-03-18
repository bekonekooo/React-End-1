import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useDispatch } from 'react-redux';

const BlogDetails= ()=>{
    const {id}=useParams();
    const {data: blog ,error,isPending}=useFetch("http://localhost:3005/blogs/"+id)
  const  navigate=useNavigate();
  const dispatch = useDispatch();

    const handleClick=()=>{
        fetch("http://localhost:3005/blogs/" + blog.id ,{
            method: "DELETE"
        }).then(()=>{
          dispatch({ type: 'DELETE_BLOG', payload: id });
          navigate("/");
        })
    }

    return(
        <div className="blog-details">
          {isPending && <div>Loading...</div>}
          {error && <div>{error}</div>}
          {blog && (
            <article>
                <h2> {blog.title}</h2>
                {/* <p> Written by {blog.author}
                </p> */}
                <div>{blog.body}</div>

                <button onClick={handleClick}>delete</button>
            </article>
          )}
        </div>
    )
}
export default BlogDetails;