import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../components/login/model/user.model";
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class loginUser {
  constructor(
    private _http: HttpClient) {  }

  public async registerUser(userModel: UserModel) : Promise<any>  {
    return await this._http.post<boolean>('http://localhost:5000/API/User/RegisterUser', userModel).toPromise();
  }

  public async login(userModel: UserModel) : Promise<any>  {
    return await this._http.post<boolean>('http://localhost:5000/API/User/LoginUser', userModel).toPromise();
  }
}
