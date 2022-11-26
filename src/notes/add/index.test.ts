import { NotesAdd } from '.'

test( 'Ignore empty text', () => {
    
    const view = new NotesAdd
    
    expect( view.text() ).toEqual( '' )
    expect( view.notes().items() ).toEqual( [] )

    view.submit()
    
    expect( view.text() ).toEqual( '' )
    expect( view.notes().items() ).toEqual( [] )

} )

test( 'Normal note adding', () => {
    
    const view = new NotesAdd
    
    view.text( 'foo' )
    view.submit()
    
    expect( view.text() ).toEqual( '' )
    expect( view.notes().items().map( item => item.text() ) ).toEqual([ 'foo' ])

} )
