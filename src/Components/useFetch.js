import { useEffect,useState} from "react"

export const useFetch = (URI) => {
    const [data,setData] = useState(null)
    const [isPending,setIsPending] = useState(true)
    const [error,setError] = useState(null)
    useEffect(()=>{
        const abortCont = new AbortController()
        setTimeout(() => {
            fetch(URI,{signal: abortCont.signal})
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
                if (err.name === 'AbortError') {
                    console.error('fetch aborted')
                } else {
                setError(err.message)
                setIsPending(false)
                }
            }) 
        }, 1000);
        // return ()=> abortCont.abort();
    },[URI])
    return {data,isPending,error}
}