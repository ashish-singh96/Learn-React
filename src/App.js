import './App.css';
import UseEffect from './Hooks/UseEffect';
import UseState from './Hooks/UseState';
import Counter from './component/Counter';
import Forms from './component/Forms';
import Parent from './component/Parent';
import Table from './component/Table';
function App() {
  return (
    <div className='App'>
      <Table/>
      <Forms/>
    </div>
  );
}

export default App;
