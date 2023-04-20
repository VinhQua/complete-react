import { useParams } from "react-router-dom/cjs/react-router-dom";
import { useFetch } from "../Components/useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
const BlogDetails = () => {
    const {id} = useParams()
    const {data,isPending,error} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history =useHistory()
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`,{
            method: 'DELETE',
        }).then(() => {
            console.log('new delete')
            history.push('/')
        })
    }

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
            <button onClick={handleDelete}>Delete</button>
                </article>
            )
            }
        </div>
      );
}
 
export default BlogDetails;