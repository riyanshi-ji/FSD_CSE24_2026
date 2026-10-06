import React,{useEffect,useState} from 'react'

function MyUseEffect() {
    const[counter,setCounter]=useState(0);
    const[pointer,setPointer]=useState(100);

    function IncreaseCounter(){
        setCounter(counter+10);
    }
    function DecreasePointer(){
        setPointer(pointer-5);
    }

    useEffect(()=>{
        console.log("hii..using useEffect hook");
        console.log("Counter= ",+counter);
    },[pointer,counter])
  return (
    <div>
        <h2>Counter app</h2>
        <h1 style={{color:"red"}}>Counter Value={counter}</h1>
        <button onClick={IncreaseCounter}>Increase Counter</button>
        <h2>Pointer app</h2>
        <h1 style={{color:"green"}}>Pointer Value={pointer}</h1>
        <button onClick={DecreasePointer}> Decrease Pointer</button>
    </div>
  )
}

export default MyUseEffect