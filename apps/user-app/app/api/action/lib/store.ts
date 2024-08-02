import { configureStore } from "@reduxjs/toolkit";
// import transferReducer from "./features/transfers/transferSlice";
import { bankOptionsReducer } from "./features/bankOptionsSlice";
import { transferReducer } from "./features/transferSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      bankOptions: bankOptionsReducer,
      transfer: transferReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
