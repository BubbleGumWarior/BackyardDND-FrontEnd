export class MainScreenModel {
  public playerName: string;
  public characterName: string;
  public imagePath: string;

  constructor(playerName: string, characterName: string, imagePath: string) {
    this.playerName = playerName;
    this.characterName = characterName;
    this.imagePath = imagePath;
  }
}
