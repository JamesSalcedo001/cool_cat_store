import './App.css'
import { Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/checkout_page" element={<Checkout/>} />
          <Route path="/" element={<h1>Test Route</h1>} />
        </Routes>    
    </div>
  )
}

export default App


