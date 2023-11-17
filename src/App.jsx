import React, { useState } from "react";
// import numberIcon from "/number19-svgrepo-com.png";
import numberIcon from "/number19-svgrepo-com.png";
import plusIcon from "./assets/img/math-plus-box-svgrepo-com.svg";

const App = () => {
  const [state, setState] = useState(0);
  function addToCount() {
    setState(state + 1);
  }
  function resetCount() {
    setState(0);
  }

  return (
    <main className="m-10 p-0">
      <header className="flex h-auto flex-row gap-4">
        <img src={numberIcon} alt="" width={"100px"} />
        <img src={plusIcon} alt="" width={"75px"} />

        <h1 className="font-yeseva text-8xl">Boilerplate</h1>
      </header>
      <h2 className=" m-2 font-urbanistMedium text-3xl">{`Number is ${state}`}</h2>
      <div className="flex flex-row gap-4">
        <button
          onClick={addToCount}
          className="rounded border-none bg-blue-600 px-6 py-2 text-white hover:opacity-50"
        >
          Click me
        </button>
        <button
          onClick={resetCount}
          className="rounded border-none bg-lime-600 px-6 py-2 text-white hover:opacity-50"
        >
          Reset
        </button>
      </div>
    </main>
  );
};

// const container = document.getElementById("root");
// const root = createRoot(container);
// root.render(React.createElement(App));

export default App;
