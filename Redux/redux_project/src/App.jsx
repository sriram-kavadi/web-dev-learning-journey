import TodoList from "./components/todoList"
import {Provider} from "react-redux"
import { store } from "./app/store"

export default function todoList(){
  return<>
  <Provider store={store}>
    <TodoList></TodoList>
  </Provider> 
  </>
}