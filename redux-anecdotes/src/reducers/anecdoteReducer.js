import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    create(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const anecdote = action.payload
      return state
        .map((a) => (a.id !== anecdote.id ? a : anecdote))
        .sort((a, b) => b.votes - a.votes)
    },
    set(state, action) {
      return action.payload.sort((a, b) => b.votes - a.votes)
    }
  },
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(set(anecdotes))
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(create(newAnecdote))
  }
}

export const voteAnecdote = (content) => {
  return async dispatch => {
    content = {
      ...content,
      votes: content.votes + 1
    }
    const updatedAnecdote = await anecdoteService.update(content)
    dispatch(vote(updatedAnecdote))
  }
}

export const { create, vote, set } = anecdoteSlice.actions
export default anecdoteSlice.reducer
