import { createStore } from "redux";
import Task from "../reducer/TaskReducer";

const store=createStore(Task,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    export default store