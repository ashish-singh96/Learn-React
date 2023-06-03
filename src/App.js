import './App.css';
import UseEffect from './Hooks/UseEffect';
import UseState from './Hooks/UseState';
import Card from './component/Card';
import Counter from './component/Counter';
import Form1 from './component/Form1';
import Forms from './component/Forms';
import Parent from './component/Parent';
import Table from './component/Table';
import Us from './Hooks/Us';
import Todo from './TODO/Todo';
import { Header, Footer } from './Web3Mantra/Header';
import Props from './Web3Mantra/Props';
import MovieReview from './Web3Mantra/MovieReview';
import Movies from './Web3Mantra/Movies';
import Movie from './Movie.json';
import PuffLoader from './Spinners/PuffLoader';
function App() {
  return (
    <div className='App'>
      <PuffLoader/>
      <UseEffect/>
    </div>
  );
}

export default App;
