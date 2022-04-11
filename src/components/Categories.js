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
    }, []);

    return (
        <div className="container-fluid">
            <h1 className="text-center mt-4" style={{fontFamily: 'Lobster'}}>{title}</h1>
            <div>
                <Link to="/"><button className="ms-3 btn btn-outline-primary">Back</button></Link>
            </div>
            <div className='d-flex justify-content-evenly flex-wrap'>
                {products.length > 0 ?
                    products.map(product => {
                        return <HomeProduct product= {product} key={product.id}/>
                        // (
                        //     <Link to={"/products/" + product.id} key={product.id} style={{ textDecoration: "none" }} className="align-self-center">
                        //         <div className="card m-5" style={{ width: "18em", border: "none" }}>
                        //             <img src={product.image} className="card-img-top" alt={product.title} />
                        //             <div className="card-body text-white mt-2" style={{ backgroundColor: "rgb(37, 37, 37)" }}
                        //                 onMouseEnter={(e) => e.target.style.background = 'rgb(102, 0, 51)'}
                        //                 onMouseLeave={(e) => e.target.style.background = 'rgb(37, 37, 37)'}>
                        //                 {product.title}
                        //                 <br /><br />
                        //                 Price: ${product.price}
                        //             </div>
                        //         </div>
                        //     </Link>
                        // )
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
