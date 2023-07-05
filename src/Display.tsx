import React, {FormEvent, useReducer, useRef, useState} from  "react";

const Display = (props: any) => {
    const[data, setData] = useState<boolean>();




    const handelClick = (e: any) => {
    console.log(e);
    if (e.completed == true) {
        setData(e.completed);

    }
    };

    return (
        <div>
          <h1>Todo</h1> 
            <p> {props.value.todo} </p>
            <h2>Description:</h2>
            <p>{props.value.description} </p>
            <button className="btn btn -warning" onClick={handelClick} ref={props.vale} >  { `Completed: ${
                props.value.completed ? true : false 
}`}</button>
        
            </div>
    );

};

export default Display