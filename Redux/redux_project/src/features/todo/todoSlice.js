import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: nanoid(),
      task: "gym",
      isDone: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo:(state,action)=>{
        let newTask={
            id:nanoid(),
            task:action.payload,
            isDone:false
        }
        state.value.push(newTask)
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter(
        (todo) => todo.id !== action.payload
      );
    },

    markDone: (state, action) => {
      const todo = state.value.find(
        (todo) => todo.id === action.payload
      );
      if (todo) {
        todo.isDone = true;
      }
    },
  },
});

export const { addTodo, deleteTodo, markDone } = todoSlice.actions;
export default todoSlice.reducer;
