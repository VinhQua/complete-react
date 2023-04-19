import { Blog } from "./Blog";
export const Blogs = ({blogs,title})=>{

    const blogsAll = blogs.map(blog => <Blog key={blog.id} blog={blog} />);

    return(
        <div className="">
            <h1>{title}</h1>
            {blogsAll}
        </div>
    )
}