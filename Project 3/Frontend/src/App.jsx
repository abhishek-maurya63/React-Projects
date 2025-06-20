import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { asyncUserCurrent } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";
import { ToastContainer } from "react-toastify";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncUserCurrent());
    dispatch(asyncLoadProducts());
  }, []);
  return (
    <div className="w-screen h-screen bg-black">
      <Nav />
      <Mainroutes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default App;
