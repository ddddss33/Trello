import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lists: JSON.parse(localStorage.getItem("lists")) || [],
};
const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addList: (state, action) => {
      state.lists.push(action.payload);
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
    addCard: (state, action) => {
      const list = state.lists.find(
        (list) => list.id === action.payload.listId
      );
      if (list) {
        list.cards.push(action.payload);
        localStorage.setItem("lists", JSON.stringify(state.lists));
      }
    },
    archivelist: (state, action) => {
      state.lists = state.lists.filter(
        (list) => list.id !== action.payload.listId
      );
      localStorage.setItem("lists", JSON.stringify(state.lists));
    },
    editList: (state, action) => {
      const listIndex = state.lists.findIndex(
        (list) => list.id === action.payload.id
      );
      if (listIndex !== -1) {
        state.lists[listIndex] = {
          ...state.lists[listIndex],
          ...action.payload.updates,
        };
        localStorage.setItem("lists", JSON.stringify(state.lists));
      }
    },
    duplicateList: (state, action) => {
      const listIndex = state.lists.findIndex(
        (list) => list.id === action.payload.id
      );
      if (listIndex !== -1) {
        const listToDuplicate = state.lists[listIndex];
        const duplicatedList = {
          ...listToDuplicate,
          id: Date.now(),
          title: `${listToDuplicate.title} (Copy)`,
        };
        state.lists.push(duplicatedList);
        localStorage.setItem("lists", JSON.stringify(state.lists));
      }
    },
  },
});

export const { addList, addCard, archivelist, editList, duplicateList } =
  boardSlice.actions;
export default boardSlice.reducer;
