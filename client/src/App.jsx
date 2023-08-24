import './App.css'
import { Route, Routes } from "react-router-dom";
import ProductsList from './ProductsList';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/products_list" element={<ProductsList/>} />
          <Route path="/" element={<h1>Test Route</h1>} />
        </Routes>    
    </div>
  )
}

export default App


