import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filter: 'all',
}
const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtering: (state, action) => {
            state.filter = action.payload;
        }
    }
})
export default filterSlice.reducer;
export const { filtering } = filterSlice.actions;