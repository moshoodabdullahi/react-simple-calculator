import { useState } from 'react';
import reactLogo from '../images/react.svg';
import viteLogo from '/vite.svg';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a className="font-medium text-[#646cff] hover:text-[#535bf2]" href="#" target="_blank">
          <img
            src={viteLogo}
            className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-xl"
            alt="Vite logo"
          />
        </a>
        <a className="font-medium text-[#646cff] hover:text-[#535bf2]" href="#" target="_blank">
          <img
            src={reactLogo}
            className="h-24 p-6 transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-xl"
            alt="JavaScript logo"
          />
        </a>
        <h1 className="text-5xl leading-tight">Vite + React</h1>
        <div className="p-8">
          <button
            className="cursor-pointer rounded-lg border border-solid border-transparent bg-[#f9f9f9] px-5 py-2.5 text-base font-medium transition-[border-color] duration-300 hover:border-[#747bff]"
            id="counter"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
