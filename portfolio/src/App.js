import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componets/Header';
import { BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Contacts from '../src/Pages/Contacts';
import Projects from '../src/Pages/Projects';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Router path="home" element={<Home />} />
          <Router path="about" element={<About />} />
          <Router path="contacts" element={<Contacts />} />
          <Router path="projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
