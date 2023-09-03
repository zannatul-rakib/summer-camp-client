import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "./SingleBlog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="container mx-auto my-20">
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                {
                    blogs.map(blog => <SingleBlog key={blog.title} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;