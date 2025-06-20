import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncUpdateUser } from "../store/actions/userActions";
import { toast } from "react-toastify";

const Products = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);

  const navigate = useNavigate();
  const toProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  const addToCart = (id, dets) => {
    if (!user) {
      alert("User not logged");
      return;
    }

    const copyCart = [...(user.cart || [])];
    const existingProIdx = copyCart.findIndex((pro) => pro.productId === id);

    if (existingProIdx > -1) {
      const updatedItem = {
        ...copyCart[existingProIdx],
        quantity: copyCart[existingProIdx].quantity + 1,
      };

      copyCart[existingProIdx] = updatedItem;
    } else {
      const cartItem = {
        productId: id,
        quantity: 1,
      };

      copyCart.push(cartItem);
    }
    dispatch(asyncUpdateUser(user.id, { ...user, cart: copyCart }));

    toast.success("Product added to cart");
  };

  const rederProducts = products.map((product) => {
    return (
      <div
        onClick={() => toProductDetail(product.id)}
        key={product.id}
        className="bg-gray-800 text-white p-4 rounded-xl shadow-lg max-w-sm transition-transform hover:scale-105"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-md mb-4 p-2"
        />

        <h1 className="text-lg font-semibold mb-2">{product.title}</h1>

        <p className="text-gray-300 text-sm mb-4">
          {product.description.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-center">
          <p className="text-cyan-400 font-bold text-md">₹ {product.price}</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product.id);
            }}
            className="bg-cyan-600 hover:bg-cyan-700 px-4 py-1 rounded-md text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  });

  return products.length > 0 ? (
    <div className="min-h-screen bg-gray-900 px-6 py-10">
      <h1 className="text-white text-2xl font-bold mb-6">Our Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rederProducts}
      </div>
    </div>
  ) : (
    "loading..."
  );
};

export default Products;
