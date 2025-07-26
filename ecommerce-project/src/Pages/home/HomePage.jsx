import "./HomePage.css";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../../components/Header";
import axios from 'axios'
import { ProductsGrid } from "./ProductsGrid";
import { useSearchParams } from "react-router";

export function HomePage({cart , loadCart}){
    const [products , setProducts] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search');

    useEffect(() =>{
        const getHomeData  = async () => {

            let response = (search) ? await axios.get(`/api/products?search=${search}`) :await axios.get('/api/products');
            setProducts(response.data);
        };

        getHomeData();
    }, [search]);
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
