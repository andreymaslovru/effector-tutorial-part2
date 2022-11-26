import { NotesList } from '.'
import { NoteRow } from '../../note/row'

test( 'Render empty list with message', () => {
    
    const view = new NotesList
    
    const dom = view.render()

    expect( dom.querySelector( '#empty' ) ).toBeTruthy()
    expect( dom.querySelectorAll( '.NoteRow' ).length ).toEqual( 0 )

} )

test( 'Render non empty list without message', () => {
    
    const view = new NotesList
    
    view.notes().make( 'foo' )
    view.notes().make( 'bar' )

    const dom = view.render()

    expect( dom.querySelector( '#empty' ) ).toBeFalsy()
    expect( dom.querySelectorAll( '.NoteRow' ).length ).toEqual( 2 )

} )

test( 'Drop notes', () => {
    
    const view = new NotesList
    
    const notes = [
        view.notes().make( 'foo' ),
        view.notes().make( 'bar' ),
    ]
    
    const dom = view.render()

    NoteRow.of( dom.querySelector( '.NoteRow' )! ).drop()
    expect( view.notes().items() ).toEqual( notes.slice(1) )

} )
