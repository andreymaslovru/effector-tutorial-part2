/** @jsxRuntime classic */
/** @jsx $mol_jsx */

import './index.css'

import {
    $mol_jsx,
    $mol_wire_solo as mem,
    $mol_jsx_view as View,
} from "mol_jsx_lib"

import { UiString } from "../../ui/string"
import { Notes } from ".."
import { UiButton } from "../../ui/button"

export class NotesAdd extends View {

    @mem notes() {
        return Notes.make({})
    }

    @mem text( next = '' ) {
        return next
    }

    protected add() {
        
        const text = this.text()
        if( !text ) return

        this.notes().make( text )
        this.text( '' )

    }

    render() {
        return <div>
            <UiString
                id='addText'
                text={ next => this.text( next ) }
                hint={ ()=> 'New Note...' }
            />
            <UiButton
                id='add'
                click={ ()=> this.add() }
                title={ ()=> 'Add' }
            />
        </div>
    }

}