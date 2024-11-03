import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greetings from './components/Greetings';
import SayHello from './components/SayHello';

function App() {
  return (<div className='App'>

      <img src={logo} alt='App Logo' height={150}/>
      
      <h1>hello</h1>

      <Welcome></Welcome>
      <Greetings name = "gbc"/>
      <SayHello></SayHello>

      <SayHello name = "patel" lname="pc"/>
    
    </div>)
}

export default App;
