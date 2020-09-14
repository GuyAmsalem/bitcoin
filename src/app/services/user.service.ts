import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User = this._createUser()
  private _user$ = new BehaviorSubject<User>(this._user)
  public user$ = this._user$.asObservable()
  
  private _createUser(): User {
    let user = new User(
      null, 'Guy Amsalem', 100, null, 'guyamsalem06@gmail.com', '123'
    );
    user.setId()
    return user
  }

}
