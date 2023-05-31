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
import Props from './Web3Mantra/Props';
function App() {
  // let name="Ashish"
  return (
    <div className='App'>
    <Props firstName="Ashish" lastName="Bhadauriya"/>
    </div>
  );
}

export default App;
