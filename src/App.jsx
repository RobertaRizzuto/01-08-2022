import Counter_useState from './Components/Counter_useState';
import './App.css';
import Counter_useReducer from './Components/Counter_useReducer';

function App() {
  return (
    <div className="App">
    <h3>con useState</h3>
  <Counter_useState/>
  <hr />
  <h3>con useReducer</h3>
  <Counter_useReducer/>
    </div>
  );
}

export default App;
