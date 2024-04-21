import { useState } from "react";
import ColorButton from "./Components/ColorButton";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <ColorButton color="red" onClick={() => setColor("red")} />
          <ColorButton color="green" onClick={() => setColor("green")} />
          <ColorButton color="blue" onClick={() => setColor("blue")} />
          <ColorButton color="black" onClick={() => setColor("black")} />
          <ColorButton color="white" onClick={() => setColor("white")} />
          <ColorButton color="orange" onClick={() => setColor("orange")} />
          <ColorButton color="silver" onClick={() => setColor("silver")} />
          <ColorButton color="gray" onClick={() => setColor("gray")} />
          <ColorButton color="purple" onClick={() => setColor("purple")} />
        </div>
      </div>
    </div>
  );
}

export default App;
