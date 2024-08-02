import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TransferState {
  addAmount: number;
}

const initialState: TransferState = {
  addAmount: 0,
};

const transferSlice = createSlice({
  name: "bankOptions",
  initialState,
  reducers: {
    setAmount(state, action: PayloadAction<any>) {
      state.addAmount = Number(action.payload);
    },
  },
});

export const { setAmount } = transferSlice.actions;
export default transferSlice.reducer;
