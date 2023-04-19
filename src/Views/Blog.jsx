export const Blog = ({blog})=>{
    return (
        <div className="blog-preview">
        <h2>{blog.title}</h2>
        <p>Written by {blog.author}</p>
        <button>Delete Blog</button>
        </div>

    )
}