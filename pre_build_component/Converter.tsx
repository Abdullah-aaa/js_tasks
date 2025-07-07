"use client";;
import React, { useState } from "react";

export default function Converter() {
  
  const [optn, setOptn] = useState("");
  const [decimal, setDecimal] = useState('');
  const [binary, setBinary] = useState('');

  const handleSubmit = () => {
    const input = parseInt(decimal,10)
    if(optn == 'binary')
    {
      setBinary(decimal.toString(2));
    }
    
}

    return (
      <>
        <div className=" p-40 text-center pt-5">
          
          <form className=" bg-slate-400 p-12">
            <h1>Enter the numbers: </h1>
            <input
              type="text"
              value={decimal}
              onChange={(e) => setInput(e.target.value)}
            />
            <br />
            <br />
            <h1>Convert to: </h1>
            <select name="select" value={optn}>
                <option value="">select</option>
                <option value="decimal">decimal</option>
                <option value="binary">binary</option>
                <option value="octal">octal</option>
                <option value="hexadecimal">hexadecimal</option>
            </select>
            <br />
            <br />
            <button
              className=" bg-slate-500 p-2 rounded-xl"
              onClick={handleSubmit}
            >
              Convert
            </button>

            <h1 className=" font-bold text-2xl">Hello</h1>
          </form>
        </div>
      </>
    );
  };

