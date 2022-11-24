/** @jsxRuntime classic */
/** @jsx $mol_jsx */

import './index.css'

import {
    $mol_jsx,
    $mol_wire_solo as mem,
    $mol_jsx_view as View,
} from "mol_jsx_lib"

import { Note } from "../../note"
import { NoteRow } from "../../note/row"
import { Notes } from ".."

export class NotesList extends View {

    @mem notes() {
        return Notes.make({})
    }

    protected drop( note: Note ) {
        this.notes().drop( note.id )
    }

    render() {
        return <div>
            { this.notes().items().map( note => (
                <NoteRow
                    id={ 'note/' + note.id }
                    note={ ()=> note }
                    drop={ ()=> this.drop( note ) }
                />
            ) ) }
        </div>
    }

}