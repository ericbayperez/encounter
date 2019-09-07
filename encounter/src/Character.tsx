export default class Character {

    constructor(name: string, currentHealth: number, totalHealth: number, armorClass: number, type: number){
        this.name = name;
        this.currentHealth = currentHealth;
        this.totalHealth = totalHealth;
        this.armorClass = armorClass;
        this.type = type;
    }

    name: string;
    currentHealth: number;
    totalHealth: number;
    armorClass: number;
    type: number;
}