import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Nav from './components/navbar/Nav';
import Home from './pages/home';
import Calculate from './pages/calc';
import Footer from './components/footer/Footer';
import Container from './components/Container/Container';

function App() {

  function Error(){
    return (
      <><h1>Página não encontrada</h1></>
    );
  }
  return (
      <BrowserRouter>
        <Nav/>
          <Container customClass="min-height">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/calcular" element={<Calculate/>}/>
              <Route path="*" element={<Error/>}/>
            </Routes>
          </Container>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
