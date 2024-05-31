import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./productCards";
import Carousel from "./carousel";

const sampleProducts = [{
  "_id": "1",
  "name": "Eco-Friendly Water Filter",
  "description": "Advanced water filter system with eco-friendly materials.",
  "price": 100,
  "imageUrl": "	https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp",
  "category": "Water Treatment",
  "quantity": 100,
  "manufacturer": "EcoWater Solutions Inc.",
  "ecoFriendly": true
},
{
  "_id": "2",
  "name": "Reusable Stainless Steel Water Bottle",
  "description": "Durable stainless steel water bottle, perfect for daily use.",
  "price": 200,
  "imageUrl": "	https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp",
  "category": "Water Bottles",
  "quantity": 200,
  "manufacturer": "EcoGear Inc.",
  "ecoFriendly": true
},
{
  "_id": "3",
  "name": "Water Saving Shower Head",
  "description": "High-efficiency shower head that reduces water consumption.",
  "price": 250,
  "imageUrl": "	https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp",
  "category": "Bathroom Accessories",
  "quantity": 150,
  "manufacturer": "GreenTech Innovations",
  "ecoFriendly": true
},
{
  "_id": "3",
  "name": "Water Saving Shower Head",
  "description": "High-efficiency shower head that reduces water consumption.",
  "price": 250,
  "imageUrl": "https://blog.sfapp.magefan.top/media/445265-72.myshopify.com/images/The-Cedar-300x300.webp",
  "category": "Bathroom Accessories",
  "quantity": 150,
  "manufacturer": "GreenTech Innovations",
  "ecoFriendly": true
}]

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <ProductList products={sampleProducts}/>
    </div>
  );
}

export default Products;
