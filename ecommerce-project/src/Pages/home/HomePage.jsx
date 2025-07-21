import "./HomePage.css";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../components/Header";
import axios from 'axios'
import { ProductsGrid } from "./ProductsGrid";

export function HomePage({cart}){

    const [products , setProducts] = useState([]);

    useEffect(() =>{
        axios.get('/api/products')
            .then((response) =>{
                setProducts(response.data);
            });
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
        products={products}
        />
    </div>

</>
);
}
