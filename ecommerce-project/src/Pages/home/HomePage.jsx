import "./HomePage.css";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../components/Header";
import axios from 'axios'
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({cart , loadCart}){
    const [products , setProducts] = useState([]);

    useEffect(() =>{
        const getHomeData  = async () => {
            let response = await axios.get('/api/products');
            setProducts(response.data);
        };

        getHomeData();
    }, []);
return (
<>
    <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
    <title>Home</title>
    <Header
    cart = {cart}
     />
    <div className="home-page">
        <ProductsGrid 
        loadCart = {loadCart}
        products= {products}
        />
    </div>

</>
);
}
