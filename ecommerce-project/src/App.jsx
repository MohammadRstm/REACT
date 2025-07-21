import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { HomePage } from './Pages/HomePage'
import {Routes , Route} from 'react-router'
import { ChecoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { TrackingPage } from './Pages/TrackingPage'
import { NotFoundPage } from './Pages/NotFoundPage'
import axios from 'axios'

function App() {

    const [cart , setCart] = useState([]);
    useEffect(() =>{
      axios.get('/api/cart-items?expand=product')
            .then((response) =>{
                setCart(response.data);
            });
    }, []);
      

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage
      cart = {cart}
      />} />
      <Route path="checkout" element={<ChecoutPage
      cart = {cart}
      />} />
      <Route path="orders" element={<OrdersPage
      cart = {cart}
      />} />
      <Route path="tracking" element={<TrackingPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </>
  )
}

export default App
