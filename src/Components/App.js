//import Home from './Home/Home.js';
import Header from '../Shared/Layout/Header.js'
import './App.css';
import Footer from '../Shared/Layout/Footer.js';
import Content from '../Shared/Layout/Content.js';
//import ToDo from './ToDo/ToDo.js';
import Timer from './Pomodoro/Timer.js';

function App() {
  return (
    <div className="App">
      <Header title="Mi app" url="https://github.com/" />
      <Content>
        <Timer/> {/* <Home/> */}
      </Content>
      <Footer/> 
    </div>
  );
}

export default App;
