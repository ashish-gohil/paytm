import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BankOptionsState {
  bankOptions: any;
  selectedBank: any;
}

const initialState: BankOptionsState = {
  bankOptions: [],
  selectedBank: "",
};

const bankOptionsSlice = createSlice({
  name: "bankOptions",
  initialState,
  reducers: {
    setBankOptions(state, action: PayloadAction<any>) {
      state.bankOptions = action.payload;
    },
    setSelectedBank(state, action: PayloadAction<any>) {
      state.selectedBank = action.payload;
    },
  },
});

export const { setBankOptions, setSelectedBank } = bankOptionsSlice.actions;
export const bankOptionsReducer = bankOptionsSlice.reducer;

