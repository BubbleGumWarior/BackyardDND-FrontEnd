import {Injectable} from "@angular/core";
import {loginUser} from "./userLogin.service";
import {UserModel} from "../components/login/model/user.model";
import {UserCharacter} from "../components/login/model/character/userCharacter.model";
import {rollModel} from "../components/mainScreen/rolls/model/roll.model";

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

  async checkUnique(userModel: UserModel): Promise<boolean> {
    return await this.apiService.checkUnique(userModel);
  }

  async createCharacter(userModel: UserModel): Promise<boolean> {
    return await this.apiService.createCharacter(userModel);
  }

  async loadCharacter(userModel: UserModel): Promise<UserCharacter> {
    return await this.apiService.loadCharacter(userModel);
  }

  async sendRoll(diceRoll: rollModel): Promise<boolean> {
    return await this.apiService.sendRoll(diceRoll);
  }
}
