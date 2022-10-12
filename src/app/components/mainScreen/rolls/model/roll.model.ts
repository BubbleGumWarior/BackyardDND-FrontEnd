export class rollModel {
  public userName?: string;
  public rollValue?: number;
  public modifier?: number;

  constructor(userName: string | undefined, rollValue: number, modifier: number) {
    this.userName = userName;
    this.rollValue = rollValue;
    this.modifier = modifier;
  }
}
