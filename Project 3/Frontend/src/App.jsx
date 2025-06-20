import { useEffect } from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { useDispatch } from "react-redux";
import { asyncUserCurrent } from "./store/actions/userActions";
import { asyncLoadProducts } from "./store/actions/productActions";
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
    </div>
  );
};

export default App;
