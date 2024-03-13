import React, { useState } from "react";

export const Counter =()=>{
     const [count , setcount] = useState(0); //count is a state variable used to keep track of the current count value in the counter component, setCount is a function provided by the useState hook to update the value of the count state variable.

     function increase(){
        setcount(count + 1);
     }

     function decrease(){
        if(count === 0){
            return;
        }
        setcount(count - 1);
     }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
        </div>
    );
};

//--------------Counter with custom step value---------

export const Mycounter =()=>{

    const [stepValue, setStepValue] = useState(1);
    const [currCount, setCurrCount] = useState(0);

    function handleInputChange(e){
        setStepValue(parseInt(e.target.value));
    }

    function increaseCount(){
        setCurrCount(currCount + stepValue)
    }
    function decrreaseCount(){
        if(currCount === 0){
            return;
        }
        setCurrCount(currCount - stepValue);
    }

    return(
        <div className="counterBody">
            <h1>{currCount}</h1>
            <input type="number" placeholder="Enter step value" value={stepValue} onChange={handleInputChange}/>
            <button onClick={increaseCount}>+</button>
            <button onClick={decrreaseCount}>-</button>
        </div>
    );
};

//--------------BG changer Toggle button----------

export const ToggleSwitch=()=>{
    const [lightBg, setLighBg] = useState('Light');

    function toggleBg(){
        const newBg = lightBg === 'Light'? 'Dark' : 'Light';
        setLighBg(newBg);
        document.body.style.backgroundColor = newBg === 'Light'? "#333" : "#f0f0f0";
    }
    return(
        <div>
            <button onClick={toggleBg}>{lightBg}</button>
        </div>
    );
};

//------------ Timer ---------------

export const Timer =()=>{
    const [timer, setTimer ] = useState(0);
    const [state, setState] = useState('Start');
    const [intervalId, setIntervalId] = useState(null);

    function handleClck(){
        if(state === 'Start'){
            const id = setInterval(()=>{
                setTimer(prevTime => prevTime + 1);
            },1000);
            setIntervalId(id);
            setState('Stop');
        }else{
            clearInterval(intervalId);
            setIntervalId(null);
            setState('Start');
        }
    }
    return(
        <div>
            <h1>{timer}</h1>
            <button onClick={handleClck}>{state}</button>
        </div>
    );
};

//------------- Todo List--------------

export const Todo =()=>{
    const [tasks, setTasks] = useState([]);
    const [inputText, setInputText] = useState('');

    function handleInputTask(e){
         setInputText(e.target.value);
    }

    function addTask(){
        if(inputText.trim() !== ''){
            setTasks([...tasks,inputText]);
            setInputText('');
        }
    }

    function removeTask(index) {
        const updatedTasks = tasks.filter((task, i) => i !== index); 
        setTasks(updatedTasks);
    }
    return(
        <div>
            <h1>Todo List</h1>
            <input type="text" value={inputText} onChange={handleInputTask} placeholder="Enter New Task" />
            <button onClick={addTask}>Add</button>

            <ol>
                {
                    tasks.map((task,index)=>(
                        <li key={index}>{task}
                            <button onClick={()=>removeTask(index)}
                            >Remove</button>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
};