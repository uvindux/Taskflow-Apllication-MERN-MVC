
import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate=useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Uvindu</h1>
        <button className='btn-user' onClick={()=> navigate('/users')}>Click Me</button>
          
      </header>
    </div>
  );
}

export default App;
