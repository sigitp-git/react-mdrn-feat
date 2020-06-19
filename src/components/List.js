import React, { useContext } from 'react'
import Note from './Note'
import Context from '../context/context'

const List = () => {
  // calling this, returns value{} from the Context.Provider component from App.js enclosing this List Component
  // value {} object contains 2 properties: notes and dispatchNotes, we only use notes here, destructure it
  const { notes } = useContext(Context)

  return (
    <div>
      {notes.map((note, i) => (
        <Note key={i} i={i} note={note} />
      ))}
    </div>
  )
}

export default List
