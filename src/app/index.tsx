/** @jsxRuntime classic */
/** @jsx $mol_jsx */

import './index.css'

import {
    $mol_jsx,
    $mol_wire_solo as mem,
    $mol_jsx_view as View,
} from "mol_jsx_lib"

import { Notes } from "../notes"
import { NotesAdd } from "../notes/add"
import { NotesList } from "../notes/list"

export class App extends View {

    @mem notes() {
        return Notes.make({})
    }

    render() {
        return <div>
            <h1 id='title'>Notes</h1>
            <NotesAdd
                id='add'
                notes={ ()=> this.notes() }
            />
            <NotesList
                id='notes'
                notes={ ()=> this.notes() }
            />
        </div>
    }

}