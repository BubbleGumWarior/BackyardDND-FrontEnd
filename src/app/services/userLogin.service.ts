import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../components/login/model/user.model";
import {BehaviorSubject, catchError, Observable, of, Subscription, tap} from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class loginUser {
  constructor(
    private _http: HttpClient) {  }

/*  registerUser(userModel: UserModel): Observable<UserModel> {
    return this._http.post<UserModel>('http://localhost:5000/API/User/RegisterUser', userModel);
  }

  loginUser(username: string, password: string) {

  }*/
}
