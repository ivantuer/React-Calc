import React from 'react';
import './Buttons.css'

export default ({clearInput, handleClick,
                plusMinus, add,
                result, minus, mul,
                divide, percent, dot}) =>
    (<div>
        <div className='row'>
            <button onClick={clearInput} >AC</button>
            <button onClick={plusMinus} >+/-</button>
            <button onClick={percent} >%</button>
            <button className="operator" onClick={divide} >/</button>
        </div>
        <div className='row'>
            <button onClick={handleClick} >7</button>
            <button onClick={handleClick} >8</button>
            <button onClick={handleClick} >9</button>
            <button className="operator" onClick={mul} >*</button>
        </div>
        <div className='row'>
            <button onClick={handleClick} >4</button>
            <button onClick={handleClick} >5</button>
            <button onClick={handleClick} >6</button>
            <button className="operator" onClick={minus} >-</button>
        </div>
        <div className='row'>
            <button onClick={handleClick} >1</button>
            <button onClick={handleClick} >2</button>
            <button onClick={handleClick} >3</button>
            <button className="operator"onClick={add} >+</button>
        </div>
        <div className='row'>
            <button onClick={handleClick} className='zero'>0</button>
            <button onClick={dot} >.</button>
            <button className="operator" onClick={result}>=</button>
        </div>
    </div>)



