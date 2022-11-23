import React, { useState } from 'react'
import { Button, TextField, Typography } from '@material-ui/core'

import { useStyles } from './styles'

export interface NoteItemProps {
 value: string
 onSave?: (value: string) => void
 onDelete?: () => void
}

const NoteItem: React.FC<NoteItemProps> = ({ value, onDelete, onSave }) => {
  const styles = useStyles()

  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [valueField, setValueField] = useState<string>(value)

  return (
    <div className={styles.container}>
      <Button color='primary' style={{ marginRight: '12px' }} onClick={onDelete}>Delete</Button>
      <Button color='primary' style={{ marginRight: '12px' }} onClick={() => {
        isEdit && onSave && onSave(valueField)
        setIsEdit(!isEdit)
      }}>{isEdit ? 'Save' : 'Edit'}</Button>
      {
        isEdit ? (
          <TextField
            onChange={(e) => setValueField(e.currentTarget.value)}
            value={valueField}
            variant='outlined'
            placeholder='Add new note'
          />
        ) : (
          <Typography variant='h6' color='textSecondary'>{value}</Typography>
        )
      }
    </div>
  )
}

export default NoteItem
