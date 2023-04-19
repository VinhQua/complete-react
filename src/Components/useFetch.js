import { useEffect,useState} from "react"

export const useFetch = (URI) => {
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        
        setTimeout(() => {
            fetch(URI)
            .then(res => {
                console.log(res)
                if (!res.ok) {
                    setIsPending(false)
                    throw Error('Couldn\'t connect to db')
                    
                }
               return res.json()
            })
            .then(data => {
                setData(data)
                console.log(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setError(err.message)
                setIsPending(false)
            }) 
        }, 1000);
    },[URI])
    return {data,isPending,error}
}