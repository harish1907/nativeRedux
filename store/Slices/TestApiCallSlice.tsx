import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callApi } from "../../utils/api/apiUtils";
import { tradeEndpoints } from "../Endpoints/TradeCoins";

export const initialState: any = {
    data: [],
    loading: false,
    error: null,
  };

export const fetchData: any = createAsyncThunk(
    'data/fetchData',
    async () => {
      try {
        return await callApi({
          uriEndPoint: tradeEndpoints.tradeCoin.v1,
        });
      } catch (error) {
        throw Error('Error fetching data');
      }
    }
  );

const TestApiCallSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export default TestApiCallSlice.reducer;