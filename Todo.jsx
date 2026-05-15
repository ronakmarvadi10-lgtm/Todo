import React, { useState } from "react";

export default function Todo() {
  const [text, setText] = useState("");
  const [state, setState] = useState([]);
  const [editid,seteditid]=useState(null)

  function Addtext(e) {
    setText(e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();

    if(editid !=null){
        const update=([...state])
        update[editid]=text
        setState(update)
        seteditid(null)
    }
    else{

        setState([...state, text]);
    }
    setText("")
  }


  function Delete(id){
    console.log(id)
    const ans=state.filter((el,i)=>{
        return i!==id
    })
    setState(ans)
}
 function edit(id){
        setText(state[id])
        seteditid(id)
    }

  return (
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="ENTER NAME"
          value={text}
          onChange={Addtext}
        />
     
        <input type="Submit" />
      </form>
{
  state.map((el, i) => {
    return (
      <>
        <li>{el}</li>
        <button onClick={() => Delete(i)}>Delete</button>
        <button onClick={() => edit(i)}>Edit</button>
      </>
    )
  })
}
    </div>
  );
}