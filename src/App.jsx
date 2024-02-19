import { useState, useRef } from 'react';
import './Style.css';

const styles = {
  color: 'black',
  fontSize: '30px',
  fontWeight: 'bold',
};

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.focus();
  }

  return (
    <div className="App">
      <div>
        <h1 style={styles}>Simplest Working Calculator</h1>
      </div>
      <form>
        <p
          ref={resultRef}
          style={{
            fontSize: 'x-large',
            fontWeight: 'bold',
          }}
        >
          {result}
        </p>
        <label htmlFor="numberInput">Enter a number:</label>
        <input
          id="numberInput"
          style={{
            border: '2px solid black',
            borderRadius: '6px',
          }}
          pattern="[0-9]"
          ref={inputRef}
          aria-label="Number Input"
          title="Please enter a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button
          style={{
            background: 'rgb(223, 49, 19)',
            color: 'rgb(255, 255, 255)',
          }}
          onClick={resetInput}
        >
          reset input
        </button>
        <button
          style={{
            background: 'rgb(223, 49, 19)',
            color: 'rgb(255, 255, 255)',
          }}
          onClick={resetResult}
        >
          reset result
        </button>
      </form>
    </div>
  );
}

export default App;
