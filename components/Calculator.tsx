import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="p-5 bg-pink-200 rounded shadow-lg w-64">
      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          readOnly
          value={input}
          className="border-2 border-pink-500 rounded w-full p-2"
        />
        <button
          onClick={clearInput}
          className="ml-2 bg-pink-500 text-white rounded p-2"
        >
          C
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+", "-", "*", "/"].map(
          (value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className="bg-pink-500 text-white rounded p-2"
            >
              {value}
            </button>
          )
        )}
        <button
          onClick={calculate}
          className="col-span-4 bg-pink-700 text-white rounded p-2"
        >
          =
        </button>
      </div>
      <div className="mt-5">
        <h2 className="text-xl">Result:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Calculator;