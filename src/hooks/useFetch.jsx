import { useEffect, useState } from 'react'
import axios from 'axios'



const API_KEY="phWqmYSutQBUoQNdcO03hjvzkABrb1PN"
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useFetch = (tag) => {
    const [gif,setGif]=useState("");
    const [loading,setLoading]=useState(false);


    async function fetch(){
        setLoading(true)
       
        const {data}=await axios.get(tag ? `${url}&tag=${tag}`:url);
        const imageSource =data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }
    useEffect(()=>{
        fetch("car");
    },[]);

    return {gif,loading,fetch};

}

export default useFetch;