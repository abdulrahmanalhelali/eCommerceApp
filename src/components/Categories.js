import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import HomeProduct from "./HomeProduct";

const Categories = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    let title = category.charAt(0).toUpperCase() + category.slice(1)
    useEffect(() => {
        async function fetchProduct() {
            try {
                let productUrl = 'https://fakestoreapi.com/products/';
                const reponse = await fetch(productUrl)
                const json = await reponse.json()
                setProducts(json.filter(item => item.category === category))
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchProduct()
    });

    return (
        <div className="container-fluid">
            <h1 className="text-center mt-4" style={{ fontFamily: 'Lobster' }}>{title}</h1>
            <div>
                <Link to="/"><button className="ms-3 btn btn-outline-primary">Back</button></Link>
            </div>
            <div className='d-flex justify-content-evenly flex-wrap'>
                {products.length > 0 && products[0].category === category ?
                    products.map(product => {
                        return <HomeProduct product={product} key={product.id} />
                    })
                    :
                    <div className="spinner-border mt-5" role="status" style={{ color: "rgb(102, 0, 51)" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
        </div >
    );
}

export default Categories;
