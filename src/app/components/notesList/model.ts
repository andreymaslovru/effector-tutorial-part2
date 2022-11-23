import { createEvent, createStore } from 'effector'

export const addNewNote = createEvent<string>()
export const deleteNote = createEvent<{id: number}>()
export const editNote = createEvent<{id: number, value: string}>()

// editNote.watch(console.log)

export const $notes = createStore<string[]>([])
  .on(addNewNote, (store, payload) => ([
    ...store, payload
  ]))
  .on(deleteNote, (store, payload) => (
    store.filter((_note, id) => id !== payload.id)
  ))
  .on(editNote, (store, payload) => (
    store.map((note, id) => {
      if (payload.id === id) return payload.value

      return note
    })
  ))

export const $notesTypeState = $notes.map(store => {
  if (store.length) {
    return 'data'
  }
  return 'empty'

})

$notes.watch(console.log)
