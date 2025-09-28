import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [products, setProducts] = useState([]);
  //let products = [];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }, []);

  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     //products = data;
  //     setProducts(data);
  //     console.log(products);
  //   });

  return (
    <div className="container">
      <div className="row">
        {products.map((item) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">
                {item.description}
                Some quick example text to build on the card title and make up
                the bulk of the card’s content.
              </p>
              <a href="#" className="btn btn-primary">
                Buy
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
