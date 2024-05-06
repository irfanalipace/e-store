import React from "react";
import "./Products.css";
import imge from "../../assets/img-pic.webp";
import imge2 from "../../assets/AlAin.webp";
import imge3 from "../../assets/addcdk.webp";
import { Link } from "react-router-dom";
import { removeProduct } from "../../features/products/productsSlice";
import { useDispatch } from "react-redux";

const ProductsList = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="container">
      <div className="row">
        {item.map((product, index) => (
          <div key={index} className="col-md-3">
            <Link
              to={`/products/${product.id}`}
              className="text-decoration-none"
            >
              <div className="card card-item-data">
                <div className="card-child-content">
                  {/* <img
                    className="card-img-top"
                    src={imge}
                    alt="Card image cap"
                  /> */}
                  {index === 0 && (
                    <img className="card-img-top" src={imge} alt="Product 1" />
                  )}
                  {index === 1 && (
                    <img className="card-img-top" src={imge2} alt="Product 2" />
                  )}
                  {index === 2 && (
                    <img className="card-img-top" src={imge3} alt="Product 3" />
                  )}
                  {index === 3 && (
                    <img className="card-img-top" src={imge} alt="Product 1" />
                  )}
                  {index === 4 && (
                    <img className="card-img-top" src={imge2} alt="Product 2" />
                  )}
                  {index === 5 && (
                    <img className="card-img-top" src={imge3} alt="Product 3" />
                  )}
                  {index === 6 && (
                    <img className="card-img-top" src={imge2} alt="Product 3" />
                  )}
                  <hr></hr>
                  <div className="card-body">
                    <p className="card-title">{product.productname}</p>
                    <p className="card-text">{product.name}</p>
                    <p className="card-text">{product.age}</p>
                    <p className="card-text">{product.address}</p>
                  </div>
                </div>

                <Link href="#" className="link-herf-data-apple">
                  Go somewhere
                </Link>

                <button onClick={() => handleRemove(product.id)}>
                  Delete Products
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
