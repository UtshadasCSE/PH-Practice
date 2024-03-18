import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((preCount) => preCount + 1);
  };
  const handleDecrement = () => {
    if (count <= 0) {
      toast("You can't decrement zero");
      return;
    }
    setCount((preCount) => preCount - 1);
  };
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <h2 className="text-3xl font-bold text-[#33186B]">{count}</h2>
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handleIncrement}
            className="btn text-white  font-extrabold text-2xl border-none px-7  bg-[#C499F3] hover:bg-[#7360DF]"
          >
            +
          </button>
          <button
            onClick={handleDecrement}
            className="btn text-white  font-extrabold text-2xl border-none px-7  bg-[#FF4B91] hover:bg-[#7360DF]"
          >
            -
          </button>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
