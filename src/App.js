import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
      
      <Header />

      <Home />

      <Footer />
    </div>
  );
}

export default App;
