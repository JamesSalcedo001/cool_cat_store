import './App.css'
import { Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from "react-redux"
import { login, setIsLoading } from './slices/userSlice';


const ProductsList = lazy(() => import('./ProductsList'));
const Cancel = lazy(() => import('./Cancel'));
const Success = lazy(() => import('./Success'));
const Header = lazy(() => import( './Header'));
const Home = lazy(() => import('./Home'));
const EditProfile = lazy(() => import('./EditProfile'));
const Signup = lazy(() => import('./Signup'));
const Login = lazy(() => import('./Login'));
const Cart = lazy(() => import('./Cart'));



function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(setIsLoading(true))
    fetch("/api/me")
    .then((res) => res.json())
    .then((data) => {
      if (data.username) {
        dispatch(login(data))
        dispatch(setIsLoading(false))
      } else {
        console.log(data.errors)
        dispatch(setIsLoading(false))
      }
    })
  },[dispatch])
  
  return (
    <div className="App">
      <Suspense 
      fallback={<div className='loadingSection'>
                  <div className="loading"></div>
                  <h3 className="load">Just a moment...</h3>
                </div>}>
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
        </Suspense>
        <a id="attribution" href="https://www.flaticon.com/free-icons/bad-luck" title="Bad luck icons">Bad luck icons created by Vlad Szirka - Flaticon</a>  
    </div>
  )
}

export default App


