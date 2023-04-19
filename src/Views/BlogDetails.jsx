import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useFetch } from "../Components/useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data,isPending,error} = useFetch(`http://localhost:8000/blogs/${id}`)
    return (
        <div className="blog-details">
            <h2>Blog Details - {id}</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { data &&
            (
                <article>
            <h2>{data.title}</h2>
            <div>{data.body}</div>
            <p>Written by {data.author}</p> <br />
            <button>Delete</button>
                </article>
            )
            }
        </div>
      );
}
 
export default BlogDetails;