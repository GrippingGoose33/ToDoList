//import Home from './Home/Home.js';
//import Header from '../Shared/Layout/Header.js'
import './App.css';
import Footer from '../Shared/Layout/Footer.js';
import Content from '../Shared/Layout/Content.js';
//import ChartHome from './Chart/Charthome.js';
//import ToDo from './ToDo/ToDo.js';
//import Timer from './Pomodoro/Timer.js';
import Person from './Forms/Person';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
//import Crypto from './Crypto/Crypto';
//import Animation from './Animating/Animation';
//import Number from './PureComponent/Number';
//import Calculadora from './Calculadora/Calculadora.js';

function App() {
  return (
    <div className="App">
      {/*<Header title="Mi app" url="https://github.com/" />*/}
      <Content>
        <Person/> {/* <Home/> */}
      </Content>
      <Footer/> 
    </div>
  );
}

export default App;
