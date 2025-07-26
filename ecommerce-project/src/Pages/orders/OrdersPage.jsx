import './OrdersPage.css'
import { Header } from '../../components/Header';
import axios from 'axios';
import {useState , useEffect } from 'react';
import { OrdersGrid } from './OrdersGrid';

export function OrdersPage({cart , loadCart}){

const [orders , setOrders] = useState([]);

useEffect(()=>{
    const getOrdersData = async ()=>{
        const response = await axios.get('/api/orders?expand=products');
        setOrders(response.data);
    }
    getOrdersData();
}, []);

return (
<>
    <link rel="icon" type="image/svg+xml" href="orders-favicon.png" />
    <title>Orders</title>
    <Header cart={cart} />

    <div className="orders-page">
        <div className="page-title">Your Orders</div>
        <OrdersGrid
        loadCart={loadCart}
        orders={orders}
        />
    </div>

</>


);
}
