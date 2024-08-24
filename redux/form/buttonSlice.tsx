import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  closeModal: false,
  saveNext: false
};

export const formSlice = createSlice({
  name: 'scholarForm',
  initialState,
  reducers: {
    setCloseModal: (state, action) => {
      state.closeModal = action.payload;
    },
    setSaveNext: (state, action) => {
      state.saveNext = action.payload;
    }
  }
});

export const formSliceActions = formSlice.actions;
export const { setCloseModal, setSaveNext } = formSlice.actions;
