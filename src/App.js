import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <Header />

      <Home />

      {/* <NotFound/> */}

      <Footer />
    </div>
  );
}

export default App;
