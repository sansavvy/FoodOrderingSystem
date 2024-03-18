import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-5/12 m-auto">
        <button
          className="p-2 m-2 bg-gray-100 text-black rounded-lg font-bold"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Cart is empty. Add items to the Cart !!</h1>
        )}
        <MenuItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
