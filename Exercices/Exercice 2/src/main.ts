import { Expresso } from "./Expresso.ts";
import { Lait } from "./Lait.ts";
import { Sucre } from "./Sucre.ts";

// Simulation d'une commande dans un café
function testCommande() {
    let unExpresso  = new Expresso();
    console.log(`Commande initiale : ${unExpresso.getDescription()} - ${unExpresso.getPrix()}€`);

    // Ajout de lait
    unExpresso = new Lait(unExpresso);
    console.log(`Après ajout de lait : ${unExpresso.getDescription()} - ${unExpresso.getPrix()}€`);

    // Ajout de sucre
    unExpresso = new Sucre(unExpresso);
    console.log(`Après ajout de sucre : ${unExpresso.getDescription()} - ${unExpresso.getPrix()}€`);

    // Résultat final
    console.log("\nCommande finale : " + unExpresso.getDescription());
    console.log("Prix total : " + unExpresso.getPrix() + "€");
}

// Exécuter le test
testCommande();
