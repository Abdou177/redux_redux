import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, search } from '../JS/actions/taskactions'

const Add = (props) => {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    const addd=()=>{
        dispatch(add({id:Math.random(), input}),setInput(''))
    }
    const searched=()=>{
        dispatch(search(props.complete))
    }
console.log(props)
   
   
    return (
        <div>
            <input type="text" placeholder="new task" value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={addd}>Add Task</button>
            
            <select  onChange={searched}>
                <option defaultValue></option>
               <option value={!props.complete} >done</option>
               <option value={props.complete} >not done</option>
           </select>
            
        </div>
    )
}

export default Add
