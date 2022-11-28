import './App.css';

import React, {
  createContext,
  useState,
  Suspense,
  lazy
} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Loading from './utils/Loading/Loading';
import Footer from './components/Footer/Footer';
import ResetScroll from './utils/ResetScroll/ResetScroll';

const Home = lazy(() => import('./routes/Home/Home'));
const Portfolio = lazy(() => import('./routes/Portfolio/Portfolio'));
const Contact = lazy(() => import('./routes/Contact/Contact'));

export const ThemeContext = createContext('App--light');

function App() {
  const [theme, setTheme] = useState('App--dark');

  return (
    <div className={'App ' + theme}>
      <Router>
        <ThemeContext.Provider value={{theme, setTheme}}>
          <Navbar />
        </ThemeContext.Provider>
        <ResetScroll />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
