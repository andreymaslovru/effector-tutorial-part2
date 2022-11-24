/** @jsxRuntime classic */
/** @jsx $mol_jsx */

import './index.css'

import {
    $mol_jsx,
    $mol_wire_solo as mem,
    $mol_jsx_view as View,
} from "mol_jsx_lib"

export class UiString extends View {

    @mem text( next = '' ) {
        return next
    }

    hint() {
        return ''
    }

    protected update( event: InputEvent ) {
        this.text( ( event.target as HTMLInputElement ).value )
    }

    render() {
        return <input
            type="text"
            value={ this.text() }
            placeholder={ this.hint() }
            oninput={ this.update.bind( this ) }
        />
    }

}