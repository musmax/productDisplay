import { useCart } from "../context/CartContext";
import "./CartCard.css";

export const CartCard = ({product}) => {
  const {name, price, image} = product;

  const {removeFromCart, trackCounter} = useCart();

  const handleRemove = () => {
    removeFromCart(product);
    trackCounter("decrease");
  }

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
  )
}
