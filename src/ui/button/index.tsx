/** @jsxRuntime classic */
/** @jsx $mol_jsx */

import './index.css'

import {
    $mol_jsx,
    $mol_jsx_view as View,
} from "mol_jsx_lib"

export class UiButton extends View {

    title() {
        return ''
    }
    
    click( event: MouseEvent ) {}

    render() {
        return <input
            type="button"
            onclick={ this.click.bind( this ) }
            value={ this.title() }
        />
    }

}