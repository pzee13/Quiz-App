import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types/interfaces'; 



const initialState: UserState = {
  username: '',
};

// Create the user slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
    },
  },
});


export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;
