import { useEffect, useState } from "react";
import { Blogs } from "./Blogs";
import { useFetch } from "../Components/useFetch";


export const Home = ()=> {
    const {data , isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return(

        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && <Blogs blogs={data}  title="All Blogs!" />}
        </div>

    )
}
