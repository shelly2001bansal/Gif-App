import { useState } from 'react'
import './tag.css'
import Spinner from './Spinner'
import useFetch from '../hooks/useFetch'


const Tag = () => {
    
    const [tag,setTag] =useState("car");

    const {gif,loading,fetch}=useFetch(tag);

    function clickHandler(){
        fetch();
    }

  return (
    <div className='b1'>
      <h2 className='b5'><u> RANDOM {tag} GIF</u></h2>
      {loading ? (<Spinner/>) : (<img className="b3" src={gif} />) }
      <input type='text' onChange={(event)=>setTag(event.target.value)} value={tag} className='b4'/>
      <button className='b2' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag
