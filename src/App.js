import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import PortfolioDetails from './pages/PortfolioDetails';

import ScrollToTop from './utils/scrollToTop';

function App() {

  return (
    <div className="App">
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/portfolio-details/:href"
            element={<PortfolioDetails />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
