import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDrivers } from './operations.ts';

export type Driver = {
   id: string;
   name: string;
   status: 'active' | 'inactive';
   rating: number;
};

interface DriversState {
   drivers: Driver[];
   loading: boolean;
}

const initialState: DriversState = {
   drivers: [],
   loading: false,
};

const driversSlice = createSlice({
   name: 'drivers',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchDrivers.pending, (state) => {
            state.loading = true;
         })
         .addCase(fetchDrivers.fulfilled, (state, action: PayloadAction<Driver[]>) => {
            state.loading = false;
            state.drivers = action.payload;
         })
         .addCase(fetchDrivers.rejected, (state) => {
            state.loading = false;
         });
   },
});

export default driversSlice.reducer;
