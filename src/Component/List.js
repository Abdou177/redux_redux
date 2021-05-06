import React from 'react'
import {  useSelector } from 'react-redux'
import OneList from './OneList'

const List = () => {
    const list=useSelector(state=>state.list)
   
    return (
        <div>

            {list.map((el,i)=><OneList key={i} el={el}/>)}
            
        </div>
    )
}

export default List
