import { ADD, COMPLETE, DELETE, EDITABLE, SAVE, SEARCH, UPDATE } from "../constants/actionstypes"

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
  export const deleteTask=id=>{
      return {
          type: DELETE,
          payload: id
      }
  }
  export const search=complete=>{
      return {
          type: SEARCH,
          payload:complete
      }
  }