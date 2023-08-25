import './App.css'
import { Route, Routes } from "react-router-dom";
import ProductsList from './ProductsList';
import Cancel from './Cancel';
import Success from './Success';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/products_list" element={<ProductsList/>} />
          <Route path="/cancel" element={<Cancel/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/" element={<h1>Test Route</h1>} />
        </Routes>    
    </div>
  )
}

export default App


