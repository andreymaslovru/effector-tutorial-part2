/** @jsxRuntime classic */
/** @jsx $mol_jsx */

import './index.css'

import {
    $mol_jsx,
    $mol_wire_solo as mem,
    $mol_jsx_view as View,
} from "mol_jsx_lib"

import { UiString } from "../../ui/string";
import { UiButton } from "../../ui/button";
import { Note } from "..";

export class NoteRow extends View {

    @mem note() {
        return Note.make({})
    }

    @mem editing( next = false ) {
        return next
    }
    
    @mem text( next?: string ) {
        return next ?? this.note().text()
    }

    protected editOn() {
        this.editing( true )
    }
    
    protected save() {
        this.note().text( this.text() )
        this.editing( false )
    }
    
    drop() {}

    render() {
        return <div>
            { this.editing()
                ? <span id='edit'>
                    <UiString
                        id='textEdit'
                        text={ next => this.text( next ) }
                    />
                    <UiButton
                        id='save'
                        title={ ()=> 'Save' }
                        click={ ()=> this.save() }
                    />
                </span>
                : <span id='view'>
                    <span id='textView'>{ this.text() }</span>
                    <UiButton
                        id='editOn'
                        title={ ()=> 'Edit' }
                        click={ ()=> this.editOn() }
                    />
                </span>
            }
            <UiButton
                id='drop'
                title={ ()=> 'Delete' }
                click={ ()=> this.drop() }
            />
        </div>
    }

}