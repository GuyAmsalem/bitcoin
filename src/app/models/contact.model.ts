import { utilService } from '../services/util.service'

export class Contact {

    constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '') {
    }

    setId?() {
        this._id = utilService.makeId(7)
    }

}