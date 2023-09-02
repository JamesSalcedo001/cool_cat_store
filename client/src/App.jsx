import './App.css'
import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { login } from './slices/userSlice';
import ProductsList from './ProductsList';
import Cancel from './Cancel';
import Success from './Success';
import Header from './Header';
import Home from './Home';
import EditProfile from './EditProfile';
import Signup from './Signup';
import Login from './Login';
import Cart from './Cart';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch("/api/me")
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        dispatch(login(data))
      }
    })
  },[dispatch])
  
  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path="/cart" element={<Cart/>} />
          <Route path="/products_list" element={<ProductsList/>} />
          <Route path="/edit_profile" element={<EditProfile/>} />
          <Route path="/sign_up" element={<Signup/>} />
          <Route path="/log_in" element={<Login/>} />
          <Route path="/cancel" element={<Cancel/>} />
          <Route path="/success" element={<Success/>} />
          <Route path="/" element={<Home/>} />
        </Routes>  
        {/* <a id="attribution" href="https://www.flaticon.com/free-icons/bad-luck" title="Bad luck icons">Bad luck icons created by Vlad Szirka - Flaticon</a>   */}
    </div>
  )
}

export default App


