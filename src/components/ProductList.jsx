import Product from './Product'
import { useState,useEffect } from 'react';
import './ProductList.css'

function ProductList() {

    // let products = [
    //     {
    //         id: 1,
    //         name: "Samsung M51",
    //         price: 23000,
    //         imageUrl: "https://cdn.phonebunch.com/fullsize/3760%20(1).jpg"
    //     },
    //     {
    //         id: 2,
    //         name: "iPhone 14 Pro",
    //         price: 123000,
    //         imageUrl: "https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691140898"
    //     },
    //     {
    //         id: 3,
    //         name: "OnePlus ",
    //         price: 70000,
    //         imageUrl: "https://image01.oneplus.net/ebp/202401/10/1-m00-48-a5-ckvlh2wewbyarnz8aavqa5augzc433.png"
    //     }
    // ]

    let [products,setProducts] = useState([]);
    
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products",{
            method:"GET"
        })
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data);
            setProducts(data);
        })
        .catch((err)=>{console.log(err);});
    },[])

    return (
        <section className='product_list'>
            {/* <Product
                name={products[0].name}
                imageUrl={products[0].imageUrl}
                price={products[0].price} /> */}
            {/* <Product
                name="iPhone 14 Pro"
                imageUrl="https://iplanet.one/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a__WWEN.jpg?v=1691140898"
                price="123000" /> */}

            {
                products.map((prod) => {
                    return (
                        <Product
                            name={prod.title}
                            price={prod.price}
                            imageUrl={prod.image} />
                    )
                })
            }

        </section>
    )
}

export default ProductList