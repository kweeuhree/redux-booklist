import type { PayloadAction } from "@reduxjs/toolkit"
import type { AppThunk } from "../../app/store"
import { createAppSlice } from "../../app/createAppSlice"

export type InitialMessageType = {
    message: string
}

export const initialState: InitialMessageType = {
    message: ''
}

export const messageSlice = createAppSlice({
    name:"message",
    initialState,
    reducers: {
        UpdateMessage:(state, action: PayloadAction<string>) => {
            state.message = action.payload;
        },
        ClearMessage:(state) => {
            state.message = '';
        },
    }
});

export const { UpdateMessage, ClearMessage } = messageSlice.actions;

export const selectMessage = (state: { message: InitialMessageType }) => state.message.message;

// Thunk to handle timed message clearing
export const messageWithTimeout = (newMessage: string): AppThunk => (dispatch) => {
    dispatch(UpdateMessage(newMessage));
    setTimeout(() => {
        dispatch(ClearMessage());
    }, 3000);
}

export default messageSlice.reducer;