import './App.css';
import Header from '../src/components/Header/Header';
import Sidebar from '../src/components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <div className="black-stripe"></div>
     <Sidebar></Sidebar>
    </div>
  );
}

export default App;
