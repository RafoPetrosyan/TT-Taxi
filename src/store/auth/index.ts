import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { signIn } from './operations.ts';
import { CurrentUser, UsersState } from './types.ts';

const initialState: UsersState = {
   currentUser: null,
   loading: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setCurrentUser: (state, action: PayloadAction<CurrentUser | null>) => {
         state.currentUser = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(signIn.pending, (state) => {
            state.loading = true;
         })
         .addCase(signIn.rejected, (state) => {
            state.loading = false;
         })
         .addCase(signIn.fulfilled, (state, action: PayloadAction<CurrentUser>) => {
            state.loading = false;
            state.currentUser = action.payload;
         });
   },
});

export const { setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
