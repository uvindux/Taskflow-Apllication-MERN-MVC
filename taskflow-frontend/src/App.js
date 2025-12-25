
import './App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import HomePage from './Components/homePage/HomePage';
import UserForm from './Components/userForm/UserForm';
function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
     


      <HomePage />
     


    </div>
  );
}

export default App;
