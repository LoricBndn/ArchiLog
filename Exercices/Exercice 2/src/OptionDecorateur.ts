import { Boisson } from "./Boisson.ts";

// Classe de base pour les options (décorateurs)
export abstract class OptionDecorateur implements Boisson {
    protected boisson: Boisson; // Référence vers une boisson existante

    constructor(boisson: Boisson) {
        this.boisson = boisson;
    }

    getDescription(): string {
        return this.boisson.getDescription();
    }

    getPrix(): number {
        return this.boisson.getPrix();
    }
}
