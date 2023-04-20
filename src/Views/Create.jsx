import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const Create = ()=>{
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('yoshi')
    const [isPending,setIsPending] = useState(false)
    const history = useHistory()
    const handleSubmit =(e)=>{
        e.preventDefault()
        const blog = {
            title,
            body,
            author,
        }
        setIsPending(true)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify(blog)
            }).then(()=>{
                console.log('new blog created')
                setIsPending(false)
                // history.go(-1)
                history.push('/')
            })            
        }, 2000);
        
    }
    return(
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                 <label htmlFor="">Blog Content</label>
                <textarea name="" id="" cols="30" rows="10" value={body}
                onChange={(e)=>setBody(e.target.value)}
                required></textarea>    
                <label htmlFor="">Author</label>
                <select name="" id="" value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="mario">mario</option>  
                    <option value="yoshi">yoshi</option>  
                </select>          
                {!isPending && <button type="submit">Add Blog</button> }
                {isPending && <button disabled type="submit">Add Blog ...</button>}
            </form>
        </div>
    )
}