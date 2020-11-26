import './App.css';
import Header from '../src/components/Header/Header';
import Sidebar from '../src/components/Sidebar/Sidebar';
import Dashboard from '../src/components/Dashboard/Dashboard';
import Footer from '../src/components/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <div className="black-stripe"></div>
     <div className="main-layout">
     <Sidebar></Sidebar>
     <Dashboard></Dashboard>
     </div>
     <Footer></Footer>
    </div>
  );
}

export default App;
