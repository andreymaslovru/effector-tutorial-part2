import { list, variant } from '@effector/reflect'
import { Typography } from '@material-ui/core'

import NoteItem, { NoteItemProps } from '../noteItem'
import { $notes, $notesTypeState, deleteNote, editNote } from './model'

interface NotesListProps {
 notes: string[]
 deleteNote: ({ id }: {id: number}) => void
}

// const NotesListView: React.FC<NotesListProps> = ({notes, deleteNote}) => {
//  const styles = useStyles()

//   return (
//    <div className={styles.container}>
//      {notes.map((note, id) => (
//             <NoteItem onDelete={() => deleteNote({id})}>{note}</NoteItem>
//         ))}
//    </div>
//   )
//  }

const NotesListView = list<string, NoteItemProps>({
  view: NoteItem,
  source: $notes,
  mapItem: {
    value: (note) => note,
    onDelete: (_, id) => () => deleteNote({ id }),
    onSave: (_, id) => (value) => editNote({ id, value })
  }
})

// export const NotesList = reflect<NotesListProps>({
//   view: NotesListView,
//   bind: {
//     notes: $notes,
//     deleteNote
//   }
// })

export const NotesListVariant = variant({
  source: $notesTypeState,
  cases: {
    data: NotesListView,
    empty: () => <Typography variant='h6' color='secondary' style={{ marginLeft: '78px' }}>List is empty</Typography>
  }
})
