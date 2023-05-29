import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Routes, Route  } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto.jsx';
// import Proyectos from './components/Proyectos/Proyectos';

function App() {
  return (
    <div className="App">
     <Header />
      <Main />
      <Footer />
    <Routes>
      <Route path='/contacto' Component={ Contacto }/>

      
    </Routes>    </div>
  );
}



export default App;
