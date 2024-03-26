import './App.css';
import HeaderArea from './HeaderArea/HeaderArea';
import MainArea from './MainArea/MainArea';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Router>
        <HeaderArea />
        <MainArea/> 
     </Router>
    </div>
    
  );
}

export default App;
