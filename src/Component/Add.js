import React, {  useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../JS/actions/taskactions'

const Add = (props) => {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    const addd=()=>{
        dispatch(add({id:Math.random(), input}),setInput(''))
    }
   const listed=useSelector(state=>state.SavedReducer
    )
   
   console.log(props)
    return (
        <div>
            <input type="text" placeholder="new task" value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={addd}>Add Task</button>
            
        </div>
    )
}

export default Add
