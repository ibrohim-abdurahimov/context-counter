import Counter from './components/Counter'
import Main from './components/Main'
import { useStateValue } from './context'
import './App.css'
import { GoMoon, GoSun } from "react-icons/go";


function App() {
  const [state, dispatch] = useStateValue()
  return (
    <>
      <div style={{ backgroundColor: state.color? "darkblue" : "dodgerblue" }} className='app'>
        <div className='wrapper'>
          <div className='card'>
            <div className='dark'>
            <GoMoon onClick={()=> dispatch({type: "BG"})} />
            </div>
            <h2>Counter</h2>
            <Main />
            <Counter />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
