import { ADD, COMPLETE, EDITABLE, SAVE, UPDATE } from "../constants/actionstypes"

export const add=newTask=>{
    return {
        type:ADD,
        payload:newTask
    }
}

export const complete=id=>{
    return{
        type:COMPLETE,
        payload:id
    }
}


export const update=(payload)=>{
    return {
        type:UPDATE,
        payload
    }
}

export const editable = (id) => {
    return {
      type: EDITABLE,
      payload: id
    };
  };