import {
    $mol_guid as guid,
    $mol_wire_solo as mem,
    $mol_wire_plex as mems,
    $mol_object as Model
} from "mol_jsx_lib"

import { Note } from "../note"

export class Notes extends Model {

    @mems Item( id: string ) {
        return Note.make({ id })
    }

    @mem ids( next = [] as readonly string[] ) {
        return next
    }

    @mem items() {
        return this.ids().map( id => this.Item( id ) )
    }

    make( text: string ) {
        const note = this.Item( guid() )
        note.text( text )
        this.ids([ ... this.ids(), note.id ])
        return note
    }

    drop( id: string ) {
        this.ids( this.ids().filter( i => i !== id ) )
    }

}