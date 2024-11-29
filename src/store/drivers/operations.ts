import { createAsyncThunk } from '@reduxjs/toolkit';
import { Driver } from './index.ts';
import httpClient from '../../services/httpClient.ts';

interface PaginationPayload {
   page: number;
   pageSize: number;
}

export const fetchDrivers = createAsyncThunk<Driver[], PaginationPayload>(
   'drivers/fetchDrivers',
   async (payload, { rejectWithValue }) => {
      const { page, pageSize } = payload;
      try {
         const response = await httpClient.get<Driver[]>('/projects', {
            params: { page, pageSize },
         });
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.message);
      }
   },
);
