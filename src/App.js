import logo from './logo.svg';
import './App.css';
import './Reset.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';


function App() {
  return (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
  );
}

export default App;