import './App.css';
import Card from './Card';
import RandomImg from "./RandomImg"
import userImg from "./userImg.jpeg"

function App() {
  return (
    <div>
      <Card cardColor="red" height={200} width={200} />
      <Card cardColor="purple" />
      <Card cardColor="green" />
      <RandomImg src={userImg} /*borderRadius="10px"*/ />
    </div>
  )
}

export default App;
