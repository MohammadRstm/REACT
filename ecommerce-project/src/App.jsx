import './App.css'
import { HomePage } from './Pages/HomePage'
import {Routes , Route} from 'react-router'
import { ChecoutPage } from './Pages/checkout/CheckoutPage'
import { OrdersPage } from './Pages/OrdersPage'
import { TrackingPage } from './Pages/TrackingPage'
import { NotFoundPage } from './Pages/NotFoundPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="checkout" element={<ChecoutPage/>} />
      <Route path="orders" element={<OrdersPage/>} />
      <Route path="tracking" element={<TrackingPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    </>
  )
}

export default App
