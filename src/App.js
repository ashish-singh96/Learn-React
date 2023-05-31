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
import {Header,Footer} from './Web3Mantra/Header';
function App() {
  let name="Ashish"
  return (
    <div className='App'>
    <Header/>
    <h1>{name}</h1>
    <Footer/>
    </div>
  );
}

export default App;
