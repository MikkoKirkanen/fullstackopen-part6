const AnecdoteForm = ({create}) => {
  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    create(content)
  }

  return (
    <div>
      <h3>Create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
