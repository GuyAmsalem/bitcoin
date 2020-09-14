import { utilService } from '../services/util.service'

export class User {

    constructor(
        public _id?: string,
        public fullname: string = '',
        public coins: number = 100,
        public moves: {}[] = [],
        public email: string = '',
        public password: string = '') { }

    setId?() {
        this._id = utilService.makeId(7)
    }
}