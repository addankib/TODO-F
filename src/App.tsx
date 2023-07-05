import { FormEvent, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display';
import axios from 'axios';

interface todo {
  id:String;
  todo:String;
  description: String;
  completed:boolean;
}

function App() {
  const url = "http://localhost:8081/TODO";

  const [val, setVal] = useState<any>([]);
  // console.log(data);
const todoref = useRef<HTMLInputElement>(null);
const descref = useRef<HTMLInputElement>(null);

  useEffect(() =>{

  fetch(url).then((res) =>{
   return res.json();
      
  }).then((data) =>{  
     console.log(data);
    return setVal(data);

  });
},[0]);

const handelSubmit = (event : FormEvent ) => {
  event.preventDefault();
  console.log(todoref);
  console.log(descref);
  
  const obj:any = {
    todo:"",
    description: ""

  };
   if (todoref.current != null){
    obj.todo = todoref.current.value;
   }

   if (descref.current != null){
    obj.description = descref.current.value;
   }

   console.log(obj);

  setVal([obj, ...val]);
  axios.post(url, obj).then((res)=> console.log(res));
};

  return(
    <>
  <h1><i>Welcome to TODO Application</i></h1>
  <form action="POST" onSubmit={handelSubmit}> 
    
    <div className="mb-3">
      <label htmlFor="todo" className="form-label"> TODO </label>
      <input  type="Text" className="form-control" id="todo" placeholder="TO DO" ref ={todoref}/>
    </div>

    <div className="mb-3">
      <label htmlFor="desc" className="form-label">Description</label>
      <input type="text" className="form-control" id="desc" placeholder='Description' ref ={descref}/>
    </div>

    <button className="btn btn-primary">Submit</button>
     {/* <p> (myVar)</p> */}
  
  </form>
  {val.map((item : todo) =>{
  return <Display value = {item} key={item.id}/>;
  })}
  </>
  );
};

export default App;
