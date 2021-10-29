import logo from './logo.svg';
import './App.css';
import Intro from './components/intro/Intro'
import About from './components/About/About'
import ProductList from './components/productList/ProductList';
function App() {
  return (
    <div>
    <Intro/>
    <About/>
    <ProductList/>
    </div>
    
  );
}

export default App;
