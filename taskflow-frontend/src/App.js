
import './App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import HomePage from './Components/homePage/HomePage';
function App() {
  const navigate=useNavigate();

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        
        <HomePage/>
          
      </header>
    </div>
  );
}

export default App;
