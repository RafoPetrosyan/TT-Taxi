import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ModalPayload {
   type: string;
   content?: any;
}

export interface ModalState {
   modalType: string;
   content: any;
}

const initialState: ModalState = {
   modalType: '',
   content: null,
};

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state, action: PayloadAction<ModalPayload>) => {
         state.modalType = action.payload.type;
         state.content = action.payload.content;
      },
      closeModal: (state) => {
         state.modalType = '';
         state.content = null;
      },
   },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
