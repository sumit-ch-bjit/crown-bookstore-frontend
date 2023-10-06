import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addCurrentUser(state, action) {
            state.currentUser = action.payload
        },
        removeCurrentUser(state) {
            state.currentUser = null
        }
    }
})

export const { addCurrentUser, removeCurrentUser } = userSlice.actions

export default userSlice.reducer