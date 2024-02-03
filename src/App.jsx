
import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'
function App() {
  

  return (
    <>
      <div className='container'>
        <h1 className='back'>RANDOM GIFS</h1>
        <Random/>
        <Tag/>
      </div>
    </>
  )
}

export default App
