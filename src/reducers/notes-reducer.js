const notesReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_NOTES':
      return action.notes
    case 'ADD_NOTE':
      return [...state, action.note]
    case 'RM_NOTE':
      return [...action.notes]
    default:
      return state
  }
}

export default notesReducer
