import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    show(state, action) {
      return action.payload
    },
    hide() {
      return ''
    },
  },
})

export const { show, hide } = notificationSlice.actions
export default notificationSlice.reducer