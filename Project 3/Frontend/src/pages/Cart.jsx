import { useDispatch, useSelector } from "react-redux";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast } from "react-toastify";
const Cart = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userReducer.users);
  const cart = useSelector((state) => state.userReducer.users?.cart);
  const product = useSelector((state) => state.productReducer.products);
  const copyCart = [...(cart || [])];
  const products = [...(product || [])];
  let grandTotal = 0;

  const removeHandler = (id) => {
    if (!user) {
      toast.error("Please login to remove items from cart");
      return;
    }
    const updatedCart = copyCart.filter((pro) => pro.productId != id);
    console.log(updatedCart);
    dispatch(asyncUpdateUser(user.id, { ...user, cart: updatedCart }));
    toast.success("Product removed from cart")
  };

  const showCart = copyCart.map((element) => {
    const ProductDetails = products.find((pro) => pro.id === element.productId);
    if (ProductDetails)
      grandTotal = grandTotal + ProductDetails.price * element.quantity;

    if (!ProductDetails) return null;
    return (
      <div
        key={ProductDetails.id}
        className="flex gap-4 items-center bg-gray-800 p-4 rounded-xl shadow-md"
      >
        <img
          src={ProductDetails.image}
          alt="Product"
          className="w-24 h-24 object-cover rounded-md"
        />

        <div className="flex-1">
          <h2 className="text-lg font-semibold">{ProductDetails.title}</h2>

          <p className="text-gray-400 text-sm">
            ₹ {ProductDetails.price} x {element.quantity}
          </p>
        </div>

        <div className="text-cyan-400 font-bold text-md">
          ₹ {ProductDetails.price * element.quantity}
        </div>
        <button
          onClick={() => removeHandler(element.productId)}
          className="bg-blue-800 rounded p-1.5 hover:bg-blue-950"
        >
          Remove
        </button>
      </div>
    );
  });

  return cart && products ? (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-2xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">{showCart}</div>

      <div className="mt-10 text-right">
        <p className="text-lg text-white font-semibold">
          Grand Total: <span className="text-cyan-400">₹ {grandTotal}</span>
        </p>
      </div>
    </div>
  ) : (
    <div> noooo </div>
  );
};

export default Cart;
