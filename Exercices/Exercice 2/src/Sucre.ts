import { OptionDecorateur } from "./OptionDecorateur.ts";

// Décorateur ajoutant du sucre
export class Sucre extends OptionDecorateur {
    getDescription(): string {
        return this.boisson.getDescription() + ", Sucre";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 0.2;
    }
}