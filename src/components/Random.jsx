
import './Random.css'
import Spinner from './Spinner'
import useFetch from '../hooks/useFetch'

const Random = () => {
    const {gif,loading,fetch}=useFetch(); 

    function clickHandler(){
        fetch();
    }

  return (
    <div className='a1'>
      <h2><u>A RANDOM GIF</u></h2>
      {loading ? (<Spinner/>) : (<img className="a3" src={gif} />) }
      <button className='a2' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
