import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
let timeoutId = null

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

export const showNotification = (content, timeout) => {
  return async (dispatch) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    dispatch(show(content))

    timeoutId = setTimeout(() => dispatch(hide()), timeout * 1000)
  }
}

export const { show, hide } = notificationSlice.actions
export default notificationSlice.reducer
