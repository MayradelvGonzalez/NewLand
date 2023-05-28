import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Contacto from './components/Contacto/contacto';
import Proyectos from './components/Proyectos/proyectos';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
          <Header />
          <Main />
     <Footer />
     <Routes>
     {/* <Route exact path="/" element={ <Info /> }/> */}
     <Route path="/Contacto" component={ Contacto }/>
     <Route path="/Proyectos" component = { Proyectos }/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
