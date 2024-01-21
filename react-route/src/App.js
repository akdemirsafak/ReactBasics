
import './App.css';
import { Routes,Route } from 'react-router-dom'; 
import Layout from './components/Layout';
import About from './components/About';
import Product from './components/Product';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<h3>Index</h3>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product/:id' element={<Product/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Route>
    </Routes>
  )
}
{/* //Sabit olmayan değişen kısımlar routes ile belirtilir. */}

export default App;
