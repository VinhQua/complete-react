import { Link } from "react-router-dom/cjs/react-router-dom.min"
export const Blog = ({blog})=>{

    return (
        <div className="blog-preview">
        <Link to ={`blog/${blog.id}`} >
            <h2>{blog.title}</h2>
        </Link>
        <p>Written by {blog.author}</p>
        </div>

    )
}