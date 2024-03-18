import "./index.css"
import { useState } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'
import Navbar from './Navbar'

const Home=()=> {
   const {data:blogs,isPending,error} =useFetch("http://localhost:3005/blogs")
   const [filter, setFilter] = useState("");

  return (
    <div className='home' >
        <Navbar className="bingo" filter={filter} setFilter={setFilter}  />
        {error && <div>{error}</div>}
        {isPending && <div>Loading... </div>}
            {blogs && <BlogList blogs={blogs.filter(blog => blog.title.toLowerCase().includes(filter.toLowerCase()))} />}
    </div>
  )
}

export default Home
