import React from "react";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden">
      <Nav />
      <main className="flex flex-col items-center justify-start w-full flex-1 overflow-x-hidden">
        <Mainroutes />
      </main>
    </div>
  );
};

export default App;
