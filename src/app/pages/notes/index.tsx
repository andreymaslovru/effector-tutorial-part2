import React from 'react'
import { Typography } from '@material-ui/core'

import { NotesListVariant } from '../../components/notesList'
import { useStyles } from './styles'
import { NoteHandler } from '../../components/noteHandler'

const NotesPage: React.FC = () => {
  const styles = useStyles()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Typography variant='h3' color='textSecondary' style={{ marginBottom: '12px' }}>Notes</Typography>
        <NoteHandler />
        <NotesListVariant />
      </div>
    </div>
  )
}

export default NotesPage
