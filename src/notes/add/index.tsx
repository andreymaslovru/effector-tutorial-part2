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

    submit() {
        
        const text = this.text()
        if( !text ) return

        this.notes().make( text )
        this.text( '' )

    }

    render() {
        return <div>
            <UiString
                id='text'
                text={ next => this.text( next ) }
                hint={ ()=> 'New Note...' }
            />
            <UiButton
                id='submit'
                click={ ()=> this.submit() }
                title={ ()=> 'Add' }
            />
        </div>
    }

}