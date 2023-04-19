import { useEffect, useState } from "react";
import { Blogs } from "./Blogs";

export const Home = ()=> {
    const [blogs,setBlog] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    setIsPending(false)
                    throw Error('Couldn\'t connect to db')
                    
                }
               return res.json()
            })
            .then(data => {
                setBlog(data)
                console.log(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            }) 
        }, 1000);

    },[])
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Blogs blogs={blogs}  title="All Blogs!" />}
        </div>
    )
}
