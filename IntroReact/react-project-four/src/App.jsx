import Card from './components/Card.jsx'
import Button from './components/Button.jsx'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  let greet=()=>
  {
    alert("hello ganesh you click the button");
  }
  return (
      <div>hello boss-app
        <Card name="Ganu Don">
          <p>Child 1</p>
          <p>child 2</p>
          <p>child 3</p>
        </Card>

        <hr/>
      
      <Button onclick={greet}></Button>
      </div>
  )
}

export default App
