import React, { ChangeEvent } from 'react'
import { useStore } from 'effector-react'
import { reflect } from '@effector/reflect'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { addNewNote } from '../notesList/model'
import { $noteInputValue, changeNoteValue } from './model'
import { useStyles } from './styles'

interface NoteHandlerViewProps {
  value: string
}

const NoteHandlerView: React.FC<NoteHandlerViewProps> = ({ value }) => {
  const styles = useStyles()

  const onChangeNote = (e: ChangeEvent<HTMLInputElement>) => {
    changeNoteValue(e.currentTarget.value)
  }

  const handleAddClick = () => {
    addNewNote(value)
    changeNoteValue('')
  }

  return (
    <div className={styles.wrapper}>
      <Button color='primary' onClick={handleAddClick} style={{ marginRight: '12px' }}>Add</Button>

      <TextField
        onChange={onChangeNote}
        value={value}
        variant='outlined'
        placeholder='Add new note'
      />
    </div>
  )
}

export const NoteHandler = reflect({
  view: NoteHandlerView,
  bind: {
    value: $noteInputValue
  }
})
