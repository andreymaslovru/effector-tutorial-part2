import {
    $mol_wire_solo as mem,
    $mol_object as Model
} from "mol_jsx_lib"

export class Note extends Model {

    id!: string

    @mem text( next = '' ) { return next }

}