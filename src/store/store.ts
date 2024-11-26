import { configureStore } from '@reduxjs/toolkit';
import drivers from './drivers/index.ts';
import modals from './modals/index.ts';

export const store = configureStore({
   reducer: {
      drivers,
      modals,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
