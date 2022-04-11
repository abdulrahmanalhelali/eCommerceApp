import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions"

const Cart = () => {
    const wholeCart = useSelector((state) => state.cart)
    const cart = wholeCart.cartItems;
    const dispatch = useDispatch();

    return (
        <div className="container-fluid mb-5">
            <h1 className="text-center mt-4" style={{ fontFamily: 'Lobster' }}>Cart</h1>
            <div>
                <Link to="/" className="ms-3 mb-5 btn btn-outline-primary">Back</Link>
            </div>
            <div className="container-fluid row fw-bold text-center fs-5">
                <div className="col-1 border mb-4">Product</div>
                <div className="col-3 border mb-4">Title</div>
                <div className="col-5 border mb-4">Description</div>
                <div className="col-1 border mb-4">Price</div>
                <div className="col-2 border mb-4">Quantity</div>
            </div>
            {wholeCart.totalPrice < 0.1 ?
                <div className="d-flex justify-content-center">
                    <h1 className="text-center me-5">Cart is Empty</h1>
                </div>
                :
                <div>

                    {cart ? cart.map(item => {
                        return (
                            <div className="container-fluid row" key={item.product.id}>
                                <div className="col-1 border d-flex justify-content-center align-items-center">
                                    <Link to={"/products/" + item.product.id}>
                                        <img src={item.product.image} style={{ maxWidth: "100%", maxHeight: "8em" }} className="mt-2 mb-2" alt={item.product.title}/>
                                    </Link>
                                </div>
                                <div className="col-3 border">{item.product.title}</div>
                                <div className="col-5 border">{item.product.description}</div>
                                <div className="col-1 border d-flex justify-content-center align-items-center">${item.product.price}</div>
                                <div className="col-2 border d-flex flex-column justify-content-center align-items-center">
                                    <p className="text-center">{item.amount}</p>
                                    <div>
                                        <button type="button" className="btn btn-outline-success me-4" onClick={() => dispatch(actions.addItem(item.product))}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                            </svg>
                                        </button>
                                        {item.amount > 0 ?
                                            <button type="button" className="btn btn-outline-danger" onClick={() => dispatch(actions.removeItem(item.product))}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16">
                                                    <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>
                                            </button>
                                            : null}
                                    </div>
                                </div>

                            </div>
                        )
                    })
                        :
                        <div className="spinner-border mt-5" role="status" style={{ color: "rgb(102, 0, 51)" }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                    <div className="container-fluid row fw-bold text-center">
                        <div className="col-1 offset-9 border d-flex justify-content-center align-items-center fs-5">Total Price: ${wholeCart.totalPrice.toFixed(3) < 0.1 ? 0 : wholeCart.totalPrice.toFixed(3)}</div>
                        <div className="col-2 border d-flex justify-content-center align-items-center fs-5">Total Items: {wholeCart.totalItems}</div>
                    </div>
                </div>

            }


        </div>
    );
}

export default Cart;

// <div className="container-fluid mt-5 mb-5 d-flex justify-content-evenly flex-wrap">
                //     <h4 className="container text-end">Total: $<span>{wholeCart.totalPrice.toFixed(3) < 0.1 ? 0 : wholeCart.totalPrice.toFixed(3)}</span></h4>
                //     {cart ? cart.map(item => {
                //         return (
                //             <div key={item.product.id} className="card align-self-center m-5" style={{ maxWidth: "35em", border: "none", color: "rgb(102, 0, 51)"}}>
                //                 <Link to={"/products/" + item.product.id} style={{ textDecoration: "none" }}>
                //                     <div className="row g-0">
                //                         <div className="col-md-4">
                //                             <img src={item.product.image} className="img-fluid rounded-start" alt={item.product.title} />
                //                         </div>
                //                         <div className="col-md-8">
                //                             <div className="card-body text-white" style={{ backgroundColor: "rgb(37, 37, 37)" }}>
                //                                 <h5 className="card-title">{item.product.title}</h5><br/>
                //                                 <div className="card-text">
                //                                     <p>Price: ${item.product.price}</p>
                //                                     <p>Description:<br />{item.product.description}</p>
                //                                     <h5 className="text-center">Quantity: {item.amount}</h5>
                //                                 </div>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </Link>
                //                 <div className="btn-group" role="group">
                //                     <button type="button" className="btn btn-outline-success" onClick={() => dispatch(actions.addItem(item.product))}>
                //                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                //                             <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                //                             <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                //                         </svg>
                //                     </button>
                //                     {item.amount > 0 ?
                //                         <button type="button" className="btn btn-outline-danger" onClick={() => dispatch(actions.removeItem(item.product))}>
                //                             <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-dash" viewBox="0 0 16 16">
                //                                 <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
                //                                 <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                //                             </svg>
                //                         </button>
                //                         : null}
                //                 </div>
                //             </div>
                //         )
                //     })
                //         : <div className="d-flex justify-content-center">
                //             <div className="spinner-border mt-5" role="status" style={{ color: "rgb(102, 0, 51)" }}>
                //                 <span className="visually-hidden">Loading...</span>
                //             </div>
                //         </div>}
                // </div>