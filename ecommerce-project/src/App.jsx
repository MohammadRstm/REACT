import './App.css'
import { HomePage } from './Pages/HomePage'
import {Routes , Route} from 'react-router'
import { ChecoutPage } from './Pages/CheckoutPage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="checkout" element={<ChecoutPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
