import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {
 //   let name = 'mario';
        const[blogs, setBlogs] = useState([
            { title:'My website', body:'lorem ipsum...', author:'mario', id:1 },
            { title:'Welcome party', body:'lorem ipsum....', author:'Umair', id:2 },
            { title:'Dev ops for cloud computing', body:'lorem ipsum...', author:'Haroon',id:3},
        ]);
        

    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title = "All Blogs" />
        </div>
     );
           }

 
export default Home;
<div className="home">
    <h2> HomePage </h2>
</div>