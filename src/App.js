import Create from "./Create";
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import BlogDetails from "./BlogDetails";

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        
        <div className='content'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        
      
        </Routes>
        </div>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
