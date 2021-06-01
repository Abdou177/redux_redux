import { ADD, COMPLETE, DELETE, EDITABLE, SEARCH, UPDATE } from "../constants/actionstypes";

const initialState={
    list:[ {id:Math.random(),
     input:"redux",
     complete:false
 }]
}

 const Task=(state = initialState,action) =>{
    switch(action.type){
        case ADD : 
        return {...state, list:[...state.list,action.payload]}
        case COMPLETE :
            return {...state.list,list:state.list.map(el=>el.id===action.payload ? {...el,complete:!el.complete}:el)}
            case UPDATE :
                return {...state.list,list:state.list.map(el=>el.id===action.payload.id ? {...el,input:action.payload.input,complete:false,editable:!el.editable}:el)}
            case EDITABLE:
                 return {...state.list,list: state.list.map((el) =>el.id === action.payload ? { ...el, editable: !el.editable }: el)};
            case DELETE:
                return{...state.list,list:state.list.filter(el=>el.id!==action.payload)}
            case SEARCH:
                return{...state.list,list:state.list.filter(el=>action.payload ? {...el,complete:el.complete}:!el.complete)}        
                default:
      return state;

    }

 }

 export default Task