import { useLoaderData } from "react-router";
import "./Products.css";
import { useState } from "react";
const Products = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  // const [items, setItems] = useState([]);
  // const [addedItems, setAddedItem] = useState([]);
  // const [showAddProducts, setShowAddProducts] = useState(false);
   
  const handleAddToCart = (product) => {
    console.log(product);
    setCart([...cart, product]);
    
    };
  const handleRemoveFromCart = (product) => {
        setCart(cart.filter((cartProduct) => cartProduct.id !== product.id));
  };
  return (
    <div>
      <h1>Products</h1>

      <div className="prooducts">
        <div className="products1">
          {products.map((product) => (
            
            
            <div key={product.id} className="product-container">
              <div className="product-image">
                <img src={product.image} alt={product.title} width={"100px"} />
              </div>
              <div className="product-detail">
                <p className="product-title">
                  {product.title.length > 21
                    ? product.title.substring(0, 20) + "..."
                    : product.title}
                </p>
                <p className="product-description">
                  {product.description.length > 51
                    ? product.description.substring(0, 50) + "..."
                    : product.description}
                </p>
                <div className="productAddCart">
                  <p className="productPrice">{product.price}</p>
                  <button id="cartBtn"
                    onClick={
                      cart.find((cartProduct) => cartProduct.id === product.id)
                        ? () => {handleRemoveFromCart(product)}
                        : () => {handleAddToCart(product)}
                    }
                    className="product-button"
                  >
                    {cart.find((cartProduct) => cartProduct.id === product.id)
                      ? "Remove from Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Products;
