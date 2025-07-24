import './TrackingPage.css'
import { Header } from '../components/Header';
import {Link} from 'react-router'
import { useParams } from 'react-router';
import { useState , useEffect} from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

export function TrackingPage({cart}){

    const {orderId , productId} = useParams();
    const [order , setOrder] = useState(null);

    useEffect(() =>{
        const getTrackingData = async () =>{
            const response = await axios.get(`/api/orders/${orderId}?expand=products`);
            setOrder(response.data);
        }
        getTrackingData();
    } , [orderId]);

    if (!order) {
        return (
            <div>no orders</div>
        );
    }
    const productDetails = order.products.find(product => product.productId === productId);
    
    let arriving = "Arriving on : ";
    let isPreparing = false;
    let isShipping = false;
    let isDelivered = false;

    let totalDeliveryTime = productDetails.estimatedDeliveryTimeMs - order.orderTimeMs;

    if (totalDeliveryTime <= 0) {
        totalDeliveryTime = 1; // prevent division by zero
    }

    const now = dayjs().valueOf();
    const timePassedMs = now - order.orderTimeMs;
    let percentageOfDeliveryTime = (timePassedMs / totalDeliveryTime) * 100;

    
    // Clamp to [0, 100]
    if (percentageOfDeliveryTime < 0) percentageOfDeliveryTime = 0;
    if (percentageOfDeliveryTime > 100) percentageOfDeliveryTime = 100;

    if (percentageOfDeliveryTime < 33) {
        isPreparing = true;
    } else if (percentageOfDeliveryTime < 100) {
        isShipping = true;
    } else {
        isDelivered = true;
        arriving = "Delivered on : ";
    }



return (
<>
<link rel="icon" type="image/svg+xml" href="tracking-favicon.png" />
    <title>Tracking</title>
    <Header cart = {cart} />
    <div className="tracking-page">
        <div className="order-tracking">
            <Link className="back-to-orders-link link-primary" to="/orders">
                View all orders
            </Link>

            <div className="delivery-date">
                {arriving} 
                {dayjs(productDetails.estimatedDeliveryTimeMS).format('MMMM D')}
            </div>

            <div className="product-info">
                {productDetails.product.name}
            </div>

            <div className="product-info">
                Quantity: {productDetails.quantity}
            </div>

            <img className="product-image" src={productDetails.product.image}/>

            <div className="progress-labels-container">
                <div className={`progress-label" ${isPreparing && 'current-status'}`}>
                    Preparing
                </div>
                <div className={`progress-label" ${isShipping && 'current-status'}`}>
                    Shipped
                </div>
                <div className={`progress-label" ${isDelivered && 'current-status'}`}>
                    Delivered
                </div>
            </div>

            <div className="progress-bar-container">
                <div style ={{width :`${percentageOfDeliveryTime}%`}} className="progress-bar"></div>
            </div>
        </div>
    </div>
</>
);
}
