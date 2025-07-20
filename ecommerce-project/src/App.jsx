import './App.css'
import { HomePage } from './Pages/HomePage'
import {Routes , Route} from 'react-router'
import { ChecoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { TrackingPage } from './Pages/TrackingPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="checkout" element={<ChecoutPage/>} />
      <Route path="orders" element={<OrdersPage/>} />
      <Route path="tracking" element={<TrackingPage/>} />
    </Routes>
    </>
  )
}

export default App
