import { useDispatch, useSelector } from "react-redux";

const CartBillDetails = () => {
  const cartTotal = useSelector((store) => store.cart.cartTotalAmount);
  return (
    <div className="divide-y divide-dashed w-[450px] h-96 p-10 m-7   bg-slate-100 shadow-lg hover:shadow-2xl">
      <div className="text-2xl text-black-800 font-bold">Bill Details</div>
      <div className="justify-between p-2">
        <div className="text-lg text-black">Item Total:{cartTotal / 100}</div>
      </div>
    </div>
  );
};

export default CartBillDetails;
