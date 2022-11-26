import { Notes } from '.'

test( 'Make and drop notes', () => {
    
    const model = new Notes
    expect( model.items() ).toEqual( [] )

    const notes = [
        model.make( 'hello' ),
        model.make( 'world' ),
    ]
    expect( model.items() ).toEqual( notes )

    model.drop( notes[0].id )
    expect( model.items() ).toEqual( notes.slice(1) )

} )
