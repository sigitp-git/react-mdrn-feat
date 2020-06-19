import React, { useEffect, useContext } from 'react'
import Context from '../context/context'
import usePosition from '../hooks/usePosition'

const Note = (props) => {
  // useEffect(() => {
  //   console.log('useEffect on child component runs')
  //   return () => {
  //     console.log('cleaning up effect')
  //   }
  // }, [])

  const { notes, setStatus, dispatchNotes } = useContext(Context)
  const position = usePosition()

  // function dispatch should live inside component that dispatching it
  const rmNote = (i) => {
    setStatus(`note ${notes[i].title} deleted`)
    notes.splice(i, 1)
    dispatchNotes({ type: 'RM_NOTE', notes: notes })
  }

  return (
    <div>
      <h3>{props.note.title}</h3>
      <p>{props.note.body}</p>
      <p>
        {position.x}, {position.y}
      </p>
      <button onClick={() => rmNote(props.i)}>rm {props.note.title}</button>
    </div>
  )
}

export default Note
