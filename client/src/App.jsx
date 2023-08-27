import './App.css'
import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import ProductsList from './ProductsList';
import Cancel from './Cancel';
import Success from './Success';
import Header from './Header';
import Home from './Home';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/api/me")
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        dispatch(login(data))
        console.log(data)
      }
    })
  },[dispatch])
  
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/products_list" element={<ProductsList/>} />
          <Route path="/cancel" element={<Cancel/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/" element={<Home/>} />
        </Routes>  
        <a id="attribution" href="https://www.flaticon.com/free-icons/bad-luck" title="Bad luck icons">Bad luck icons created by Vlad Szirka - Flaticon</a>  
    </div>
  )
}

export default App


