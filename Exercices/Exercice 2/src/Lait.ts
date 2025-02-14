import { OptionDecorateur } from "./OptionDecorateur.ts";

// Décorateur ajoutant du lait
export class Lait extends OptionDecorateur {
    getDescription(): string {
        return this.boisson.getDescription() + ", Lait";
    }

    getPrix(): number {
        return this.boisson.getPrix() + 0.5;
    }
}