import { Boisson } from "./Boisson.ts";

// Classe représentant un Thé
export class The implements Boisson {
    getDescription(): string {
        return "Thé";
    }

    getPrix(): number {
        return 1.5;
    }
}