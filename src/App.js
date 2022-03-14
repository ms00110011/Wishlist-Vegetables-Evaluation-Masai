import logo from './logo.svg';
import './App.css';
import { Wishlist } from './Components/Wishlist';
import { Vegetables } from './Components/Vegetables';

function App() {
  return (
    <div className="App">
    <Wishlist />
    <Vegetables />
    </div>
  );
}

export default App;
