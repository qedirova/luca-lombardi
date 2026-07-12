import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  query: string;
}

const initialState: InitialState = {
  query: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
