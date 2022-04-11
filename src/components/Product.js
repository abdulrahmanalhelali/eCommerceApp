import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions"

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cartItems)
    let cartIndex = product && cart ? cart.findIndex(item => item.product.id === product.id) : -1;
    let quantityInCart = 0;
    if (cartIndex !== -1) quantityInCart = cart[cartIndex].amount;

    useEffect(() => {
        async function fetchProduct() {
            try {
                let productUrl = 'https://fakestoreapi.com/products/' + productId;
                const reponse = await fetch(productUrl)
                const json = await reponse.json()
                setProduct(json)
            }
            catch (err) {
                console.log(err)
            }

        }
        fetchProduct()
    }, [productId]);

    return (
        <div className="container" style={{ color: "rgb(102, 0, 51)" }}>
            {product ?
                <div className="mt-5">
                    <div>
                        <Link to="/" className="mt-3 ms-3 btn btn-outline-primary">Back</Link>
                    </div>
                    <div className="row">
                        <div className="col-5 offset-1">
                            <img src={product.image} style={{ width: "18em" }} alt={product.title} />
                        </div>
                        <div className="col-5">
                            <h5 className="">{product.title}</h5>
                            <div className="mt-5 d-flex justify-content-between">
                                <h6 className="d-inline-block">Price: ${product.price}</h6>
                                <div className="btn-group ms-5" role="group">
                                    <button type="button" className="btn btn-outline-success" onClick={() => dispatch(actions.addItem(product))}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </button>
                                    {cartIndex !== -1 ?
                                        <button type="button" className="btn btn-outline-danger" onClick={() => dispatch(actions.removeItem(product))}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16">
                                                <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </button>
                                        : null}

                                </div>
                            </div>
                            <div className="text-end mt-2">
                                <span className="me-2">In Cart:</span>
                                {cartIndex !== -1 ?
                                    <span className="">{quantityInCart}</span>
                                    :
                                    0}
                            </div>
                        </div>
                    </div>
                    <div className="container row mt-5">
                        <div>
                            <h6>Description:</h6>
                            {product.description}
                        </div>
                        <div className="mt-5 mb-3 d-flex justify-content-center align-items-center flex-column text-black">
                            <div className="d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <span className="ms-1">{product.rating.rate}</span>
                            </div>
                            <div className="d-flex align-items-center">
                                Reviews:<span className="ms-2">{product.rating.count}</span>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border mt-5" role="status" style={{ color: "rgb(102, 0, 51)" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }

        </div>
    );
}

export default Product;