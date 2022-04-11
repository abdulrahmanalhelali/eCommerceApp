import { useEffect, useState } from 'react';
import HomeProduct from './HomeProduct';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            try {
                let productUrl = 'https://fakestoreapi.com/products';
                const reponse = await fetch(productUrl)
                const json = await reponse.json()
                setProducts(json)
            }
            catch (err) {
                console.log(err)
            }

        }
        fetchProduct()
    }, []);

    return (
        <div className="home">
            {console.log("test")}
            <h1 className='d-flex justify-content-center mt-4' style={{ fontFamily: 'Lobster' }}>Products</h1>
            <div className='d-flex justify-content-evenly flex-wrap'>
                {products.length > 0 ?
                    products.map(product => {
                        return <HomeProduct product= {product} key={product.id}/>
                    })
                    :
                    <div className="spinner-border mt-5" role="status" style={{ color: "rgb(102, 0, 51)" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
            </div>
        </div >
    )
}

export default Home;