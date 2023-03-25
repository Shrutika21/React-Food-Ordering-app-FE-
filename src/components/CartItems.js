import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../Constants";
import {
  addItem,
  decreaseQuantity,
  getTotalAmount,
  removeItem,
} from "../utils/cartSlice";
const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const handelRemoveItem = (id) => {
    dispatch(removeItem(id));
    dispatch(getTotalAmount());
  };

  const handelAddItem = (id) => {
    dispatch(addItem(id));
    dispatch(getTotalAmount());
  };

  const handelDecrease = (item) => {
    dispatch(decreaseQuantity(item));
    dispatch(getTotalAmount());
  };
  console.log("**********Quantity HERE:" + item.name + " - " + item.quantity);
  console.log("in cart items:" + item.name);
  return (
    <li
      className="w-[800px] h-44 p-2 m-1 shadow-lg hover:shadow-2xl rounded-lg"
      key={item.id}
    >
      <div>
        <div className="flex">
          <div className="text-sm font-bold ml-2">
            {item.name}
            {item.isVeg == 0 ? <span>🔴</span> : <span> 🟢 </span>}
          </div>
          <div className="ml-4 border-solid border-2">
            <button
              onClick={() => {
                handelDecrease(item);
              }}
              className="p-1 text-gray-400 font-bold"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => {
                handelAddItem(item);
              }}
              className="p-1 text-green-600 font-bold"
            >
              +
            </button>
          </div>
        </div>
        <div className="ml-2">
          {item.price / 100 == 0 ? (
            <span className="text-sm mr-1 ">₹{item.defaultPrice / 100}</span>
          ) : (
            <span className="text-sm mr-1 ">₹{item.price / 100}</span>
          )}
          <p>{item.category}</p>
          <p className="text-[12px]">{item.description}</p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              handelRemoveItem(item);
            }}
            className=" p-1 rounded-lg bg-red-400  text-[11px] hover:bg-red-500 text-white "
          >
            REMOVE
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
