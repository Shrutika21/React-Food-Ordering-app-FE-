import image from "../../empty-cart.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import CartItems from "./CartItems";
import CartBillDetails from "./CartBillDetails";
const Cart = () => {
  cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return cartItems.length == 0 ? (
    <div>
      <div data-testid="complete-cart" className="flex justify-center">
        <img alt="cart-empty-img" src={image} />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="bg-green-400 rounded-lg p-2 m-5">Add</button>
        </Link>
      </div>
    </div>
  ) : (
    <>
      <h1 className="text-2xl font-bold">
        {" "}
        Cart Items Added: {cartItems.length}
      </h1>
      <div className="grid grid-flow-col auto-cols-max pb-40 ml-2">
        <div className="list-none">
          {cartItems.map((item) => {
            console.log(item.name);
            return <CartItems key={item.key} item={item}></CartItems>;
          })}
          {cartItems.length > 0 && (
            <button
              className="bg-red-500 hover:bg-red-600 rounded-lg p-1 m-3 text-white"
              onClick={() => {
                handleCartClear();
              }}
            >
              Clear Cart
            </button>
          )}
        </div>
        <div>{cartItems.length > 0 && <CartBillDetails></CartBillDetails>}</div>
      </div>
    </>
  );
};

export default Cart;
