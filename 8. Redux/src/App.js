import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './redux/reducers/count.js'
import { addFavoriteThings, removeFavoriteThing } from './redux/reducers/favoriteThings.js'
import './App.css'

function App() {
  const count = useSelector(state => state.count)
  const favoriteThings = useSelector(state => state.favoriteThings)
  const youTubeVideos = useSelector(state => state.youTubeVideos)
  const dispatch = useDispatch()

  const [add, setAdd] = useState('')
  const addFavorite = (e) => setAdd(e.target.value)
  const onSaveAddFavorite = () => {
    if (add) {
      dispatch(
        addFavoriteThings(add)
      )
      setAdd('')
    }
  }


  return (
    <div className="App">
      <section>
        <h1>Redux</h1>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </section>

      <section>
        <h1>{favoriteThings}</h1>
        <button onClick={onSaveAddFavorite}>Add Item</button>
        <input 
        type="text"
        value={add}
        onChange={addFavorite} />
      </section>
    </div>

  );
}

export default App;
