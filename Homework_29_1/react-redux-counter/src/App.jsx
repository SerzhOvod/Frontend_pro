import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import './App.css';
import { decrement, increment } from './store/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="page">
        <div className="container">
          <h1 className="title">Value: {count}</h1>
          <div className="buttons">
            <button className="button" onClick={() => dispatch(increment())}>
              +
            </button>
            <button className="button" onClick={() => dispatch(decrement())}>
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
