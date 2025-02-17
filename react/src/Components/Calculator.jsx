/*import  React from 'react'
import { useState } from 'react';
import { BsDisplay } from 'react-icons/bs';

 const Calculator = () => {

    const [inputValue ,setInputValue]=useState('')

    const clear =()=>{
        setInputValue("");
    }
     
    const display =(value) => setInputValue(inputValue +value);
    const calculate=()=> setInputValue(eval(inputValue));
    
  return (
    
    <form className='calculator' name='calc' style={{marginTop:'40px', marginLeft:'80px'}}>
        <input type="text" className="value" value={inputValue} />


         <span className="num clear" onClick={()=> clear()} style={{ height:'50px', width:'50px', marginTop:'2px',}}>c</span>

         <span onClick={()=> display('/')}>/</span>
         <span onClick={()=> display('*')}>*</span>
         <span onClick={()=> display('7')}>7</span>
         <span onClick={()=> display('8')}>8</span>
         <span onClick={()=> display('9')}>9</span>
         <span onClick={()=> display('-')}>-</span>
         <span onClick={()=> display('4')}>4</span>
         <span onClick={()=> display('5')}>5</span>
         <span onClick={()=> display('6')}>6</span>
         <span className='plus'  onClick={()=> display('+')}>+</span>

         <span onClick={()=> display('1')}>1</span>
         <span onClick={()=> display('2')}>2</span>
         <span onClick={()=> display('3')}>3</span>
         <span onClick={()=> display('0')}>0</span>
         <span onClick={()=> display('00')}>00</span>
         <span onClick={()=> display('.')}>.</span>
      
         <span className='num equal' onClick={()=> calculate()}>*</span>


    </form>


  )
}

export default Calculator;*/

/*import React from 'react'
import { useState } from 'react';

import '../style.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAdd = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum.toString());
  };

  const handleSubtract = () => {
    const difference = parseInt(num1) - parseInt(num2);
    setResult(difference.toString());
  };

  const handleMultiply = () => {
    const product = parseInt(num1) * parseInt(num2);
    setResult(product.toString());
  };

  const handleDivide = () => {
    const quotient = parseInt(num1) / parseInt(num2);
    setResult(quotient.toString());
  };

  return (
    <div className="calculator">
      <input type="number" value={num1} onChange={handleNum1Change} />
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubtract}>-</button>
      <button onClick={handleMultiply}>*</button>
      <button onClick={handleDivide}>/</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;*/


import React, { useState } from 'react';
import '../calculator.css';

const Calculator = () => {
  const [num, setNum] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (digit) => {
    setNum(num + digit);
  };

  const handleOperatorClick = (operator) => {
    setNum(num + operator);
  };

  const handleEqualClick = () => {
    try {
      const calculation = eval(num);
      setResult(calculation.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClearClick = () => {
    setNum('');
    setResult('');
  };

  return (
    <div className="calculator">
      <input type="text" value={num} disabled />
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={handleClearClick}>C</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;


