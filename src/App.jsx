  import React from 'react'
  import { BrowserRouter, Routes, Route } from "react-router-dom"
  import HomePage from './Pages/HomePage'
  import About from './Pages/About'
  import Products from './Pages/Products'
  import Contact from './Pages/Contact'
  import Singleproduct from './Pages/Singleproduct'
  import Cart from './Pages/Cart'
  import ErrorPage from './Pages/ErrorPage'
  import Nav from './components/Nav'

  function App() {
    return (
      <div className='mt-12 h-[10vh]' >
        <BrowserRouter>
          <Nav />
          <Routes >
            <Route  path='/' element={<HomePage  />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/singleproduct/:id' element={<Singleproduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }

  export default App