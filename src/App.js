import React, { useState, useEffect, useReducer } from 'react'
import notesReducer from './reducers/notes-reducer'
import List from './components/List'
import Form from './components/Form'
import Context from './context/context'
import './App.css'

const App = () => {
  const [notes, dispatchNotes] = useReducer(notesReducer, [])
  const [status, setStatus] = useState('')

  useEffect(() => {
    console.log('load external data to state, one time')
    const noteLocStore = JSON.parse(localStorage.getItem('notes'))
    if (noteLocStore) {
      dispatchNotes({ type: 'FETCH_NOTES', notes: noteLocStore })
    }
  }, [])

  useEffect(() => {
    console.log('note state changes')
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    // Context.Provider provides value which is an object {} with 2 things: notes[] array and dispatch() function
    <Context.Provider value={{ status, setStatus, notes, dispatchNotes }}>
      <h1>NOTEEE</h1>
      {/* these List props passed from App's state and functions will be removed by using useContext() */}
      {/* these props also send down to Note by List, App-->List-->Note */}
      <Form />
      <List />
    </Context.Provider>
  )
}

export default App
