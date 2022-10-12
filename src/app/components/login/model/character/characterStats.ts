export class characterStats{
  public userName?: string;
  public strength?: number[];
  public dexterity?: number[];
  public constitution?: number[];
  public intelligence?: number[];
  public wisdom?: number[];
  public charisma?: number[];

  constructor(userName: string, strength: number[], dexterity: number[], constitution: number[], intelligence: number[], wisdom: number[], charisma: number[]) {
    this.userName = userName;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
  }
}
