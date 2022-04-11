import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Homeproduct = (props) => {
    const product = props.product;
    const [height, setHeight] = useState(0)
    const ref = useRef(null);

    useEffect(() => {
        setHeight(ref.current.clientHeight)
    });

    return (
        <div className='' style={{ position: "relative" }} key={product.id}>
            <div className="card m-5" style={{ width: "20em", border: "none", textDecoration: "none" }} ref={ref}>
                <div className="d-flex justify-content-center">
                    <img src={product.image} className="card-img-top" alt={product.title} style={{maxWidth: "20em", height: "20em" }}  />
                    <div className="mb-2"></div>
                </div>
                <div className="card-body text-white d-flex justify-content-between" style={{ backgroundColor: "rgb(37, 37, 37)", borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                    <div>
                        {product.title}
                    </div>
                    <div className="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-star-fill me-2" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        {product.rating.rate}
                    </div>
                </div>
            </div>
            <Link to={"/products/" + product.id}>
                {ref.current != null ?
                    <div className='m-5 bg-dark' style={{ position: "absolute", top: "0px", width: "20em", height: height, opacity: 0, borderRadius: 10 }}
                        onMouseEnter={(e) => e.target.style.opacity = 0.3}
                        onMouseLeave={(e) => e.target.style.opacity = 0} />
                    :
                    console.log("null", height)
                }
            </Link>

        </div>
    );
}

export default Homeproduct;
