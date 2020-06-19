import React, { useState, useContext } from 'react'
import Context from '../context/context'

const Form = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { status, setStatus, dispatchNotes } = useContext(Context)

  const addNote = (e) => {
    e.preventDefault()
    if (title.length > 0 && body.length > 0) {
      dispatchNotes({
        type: 'ADD_NOTE',
        note: { title: title, body: body },
      })
      setTitle('')
      setBody('')
      setStatus(`${title} note saved`)
    } else {
      setStatus('title and body required')
    }
  }

  return (
    <>
      <p>{status || 'welcome to note app'}</p>
      <form onSubmit={(e) => addNote(e)}>
        <div>
          <input
            placeholder='note title...'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder='note body...'
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <div>
          <button>Add Note</button>
        </div>
      </form>
    </>
  )
}

export default Form
