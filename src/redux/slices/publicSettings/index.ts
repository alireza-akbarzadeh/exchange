import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PublicSettingState } from "redux/types/publicSettings";

const initialState: PublicSettingState = {
  data: { hideBalance: false },
};

const publicSettingSlice = createSlice({
  name: "publicsetting",
  initialState: initialState,
  reducers: {
    changeHideBalance: (state) => {
      state.data.hideBalance = !state.data.hideBalance;
    },
  },
});

export const { changeHideBalance } = publicSettingSlice.actions;

export default publicSettingSlice.reducer;
