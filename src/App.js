import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Blogs from './components/Blogs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='home' element={<Home />}/>
        <Route path='about-us' element={<AboutUs />}/>
        <Route path='contact-us' element={<ContactUs />}/>
        <Route path='blogs' element={<Blogs />}/>
      </Routes>
    </div>
  );
}

export default App;
