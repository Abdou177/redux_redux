import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { complete, editable, update } from '../JS/actions/taskactions'

const OneList = (props) => {
    const [input, setInput] = useState(props.el.input);

    const dispatch=useDispatch()
    const done=()=>{
        dispatch(complete(props.el.id))
    }
    const ediatble = () => {
        dispatch(editable(props.el.id));
      };
      const edit = () => {
        dispatch(update({ id: props.el.id, input: input }));
      };
   
    return (
        <div>
            {props.el.editable ? (
                <>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                <button onClick={edit}>save</button>
          <button onClick={ediatble}>cancel</button>
                </>
            ) : (
                <>
                <ul> {props.el.input} </ul>
           <ul> {props.el.complete ? 'is done' : 'not done'}</ul>
           <button onClick={done}>{props.el.complete ? 'uncomplete' : 'complete'} </button>
           <button onClick={ediatble}>edit</button>

                </>
            )
        }
           
           
            
        </div>
    )
}

export default OneList
