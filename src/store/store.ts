import { configureStore } from '@reduxjs/toolkit';
import modals from './modals/index.ts';
import drivers from './drivers/index.ts';
import auth from './auth/index.ts';

export const store = configureStore({
   reducer: {
      modals,
      drivers,
      auth,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
