import { NoteRow } from '.'
import { UiButton } from '../../ui/button'
import { UiString } from '../../ui/string'

test( 'Render text view', () => {
    
    const view = new NoteRow
    view.note().text( 'foo' )
    
    const dom = view.render()

    expect( dom.querySelector( '#view' ) ).toBeTruthy()
    expect( dom.querySelector( '#textView' )!.textContent ).toEqual( 'foo' )

    expect( dom.querySelector( '#edit' ) ).toBeFalsy()

} )

test( 'Render text edit', () => {
    
    const view = new NoteRow
    view.note().text( 'foo' )
    view.editOn()

    const dom = view.render()

    expect( dom.querySelector( '#view' ) ).toBeFalsy()

    expect( dom.querySelector( '#edit' ) ).toBeTruthy()
    expect( UiString.of( dom.querySelector( '#textEdit' )! ).text() ).toEqual( 'foo' )

} )

test( 'Edit scenario', () => {
    
    const view = new NoteRow
    view.note().text( 'foo' )
    view.editOn()

    const dom = view.render()

    UiString.of( dom.querySelector( '#textEdit' )! ).text( 'bar' )
    expect( view.note().text() ).toEqual( 'foo' )

    UiButton.of( dom.querySelector( '#save' )! ).click( new MouseEvent( 'click' ) )
    expect( view.note().text() ).toEqual( 'bar' )

} )
