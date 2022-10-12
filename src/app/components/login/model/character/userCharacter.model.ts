export class UserCharacter {
  public userName?: string;
  public name?: string;
  public race?: string;
  public alignment?: string;
  public className?: string;
  public age?: number;
  public currentHealth?: number;
  public maxHealth?: number;
  public currentMana?: number;
  public maxMana?: number;
  public experience?: number;
  public personalityTraits?: string[];
  public flaws?: string[];
  public ideals?: string[];
  public description?: string;
  public family?: string[];
  public friends?: string[];
  public imagePath?: string;
  public strength?: number[];
  public dexterity?: number[];
  public constitution?: number[];
  public intelligence?: number[];
  public wisdom?: number[];
  public charisma?: number[];

  constructor(userName: string, name: string, race: string, alignment: string, className: string, age: number, currentHealth: number, maxHealth: number, currentMana: number, maxMana: number, experience: number, personalityTraits: string[], flaws: string[], ideals: string[], description: string, family: string[], friends: string[], imagePath: string, strength: number[], dexterity: number[], constitution: number[], intelligence: number[], wisdom: number[], charisma: number[]) {
    this.userName = userName;
    this.name = name;
    this.race = race;
    this.alignment = alignment;
    this.className = className;
    this.age = age;
    this.currentHealth = currentHealth;
    this.maxHealth = maxHealth;
    this.currentMana = currentMana;
    this.maxMana = maxMana;
    this.experience = experience;
    this.personalityTraits = personalityTraits;
    this.flaws = flaws;
    this.ideals = ideals;
    this.description = description;
    this.family = family;
    this.friends = friends;
    this.imagePath = imagePath;
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
  }
}
