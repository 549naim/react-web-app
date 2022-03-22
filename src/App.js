import './App.css';
import Mainpage from './Components/Mainpage';
import StudentsConntext from './contexts/StudentsConntext';

function App() {
  return (
    <div className="App">
      <StudentsConntext>
        <Mainpage/>
      </StudentsConntext>
      
    </div>
  );
}

export default App;
