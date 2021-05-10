import React from 'react'
import {   useSelector } from 'react-redux'
import OneList from './OneList'

const List = () => {
    const list=useSelector(state=>state.list)


    // const dispatch=useDispatch()
    // const searched=()=>{
    //     dispatch(search(props.complete))
    // }
   
    return (
        <div>
            {/* <select onChange={searched} >
                <option defaultValue></option>
               <option value={!props.complete} >done</option>
               <option  value={props.complete}>not done</option>
           </select> */}

            {list.map((el,i)=><OneList key={i} el={el}/>)}
            
        </div>
    )
}

export default List
