import { useCart } from "../context/CartContext";
import "./ProductCard.css";

export const ProductCard = ({product}) => {
  const {name, price, image} = product;
  const {addToCart, cartList, trackCounter} = useCart();

  function handleCart() {
     addToCart(product);
    trackCounter("increase");

  }

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={handleCart}>Add To Cart</button>
      </div>
    </div>
  )
}
