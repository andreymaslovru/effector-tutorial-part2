import { createEvent, createStore } from 'effector'

export const changeNoteValue = createEvent<string>()

export const $noteInputValue = createStore<string>('')
  .on(changeNoteValue, (_store, payload) => payload)
