import React, { useState } from 'react'

export default function Todoo() {
    const [state,setState]=useState('')
    const [state1,setState1]=useState([])

    function AddText(e){
       setState( e.target.value)

    }

    function handleSubmit(e){
       e.preventDefault()
       setState1([...state1,state])
    }

    function deleteEn(id){
           console.log(id)
        var ans=state1.filter((el,i)=>{
            return i!== id
        })
        setState1(ans)
    }

  return (
    <div>
      <h1>Todo</h1>
     <form action="" onSubmit={handleSubmit}>
         <input type="text" placeholder='enter name' value ={state} onChange={AddText}/>
      <input type='submit'/>
     </form>

     {
        state1.map((el,i)=>{
            return <>
                   <li key={i}>{el}</li>
                   <button onClick={()=>deleteEn(i)}>Click</button>
            </>
        })
     }
    </div>
  )
}

Todo Video:https://drive.google.com/drive/folders/1uEOkmNoV_DnZhiGt8MoEE5y1aj1zyAO4?usp=sharing
