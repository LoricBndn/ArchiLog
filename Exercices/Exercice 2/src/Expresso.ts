import { Boisson } from "./Boisson.ts";

// Classe représentant un Expresso
export class Expresso implements Boisson {
    getDescription(): string {
        return "Expresso";
    }

    getPrix(): number {
        return 2.0;
    }
}