export default class Character {

    constructor(id: number, name: string, currentHealth: number, totalHealth: number, armorClass: number, isPlayer: boolean, isSelected: boolean, isCurrentTurn: boolean, initiative: number, isDisadvantaged: boolean){
        this.id = id;
        this.name = name;
        this.currentHealth = currentHealth;
        this.totalHealth = totalHealth;
        this.armorClass = armorClass;
        this.isPlayer = isPlayer;
        this.isSelected = isSelected;
        this.isCurrentTurn = isCurrentTurn;
        this.initiative = initiative;
        this.isDisadvantaged = isDisadvantaged;
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
    isDisadvantaged: boolean;

}