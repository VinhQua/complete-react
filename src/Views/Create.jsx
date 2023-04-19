import { useState } from "react"

export const Create = ()=>{
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [author,setAuthor] = useState('yoshi')
    return(
        <div className="create">
            <h2>Add A New Blog</h2>
            <form action="" method="post">
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
            </form>
        </div>
    )
}