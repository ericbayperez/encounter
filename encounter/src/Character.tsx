export default class Character {

    constructor(id: number, name: string, currentHealth: number, totalHealth: number, armorClass: number, isPlayer: boolean, isSelected: boolean, isCurrentTurn: boolean, initiative: number){
        this.id = id;
        this.name = name;
        this.currentHealth = currentHealth;
        this.totalHealth = totalHealth;
        this.armorClass = armorClass;
        this.isPlayer = isPlayer;
        this.isSelected = isSelected;
        this.isCurrentTurn = isCurrentTurn;
        this.initiative = initiative;
    }
    id: number;
    name: string;
    currentHealth: number;
    totalHealth: number;
    armorClass: number;
    isPlayer: boolean;
    isSelected: boolean;
    isCurrentTurn: boolean;
    initiative: number;

}