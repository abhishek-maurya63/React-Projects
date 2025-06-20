import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
const App = () => {
  const [users, setusers] = useState([
    { name: "John", age: 89 },
    { name: "Ankur", age: 15 },
    { name: "Lokesh", age: 19 },
  ]);

  return (
    <div>
      <Create />
      <hr />
      <Read users={users} setusers={setusers} />
    </div>
  );
};

export default App;
