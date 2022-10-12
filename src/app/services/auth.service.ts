import {Injectable} from "@angular/core";
import {loginUser} from "./userLogin.service";
import {UserModel} from "../components/login/model/user.model";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: loginUser) {
  }

  async login(userModel: UserModel): Promise<boolean> {
    return await this.apiService.login(userModel);
  }

  async registerUser(userModel: UserModel): Promise<boolean> {
    return await this.apiService.registerUser(userModel);
  }
}
