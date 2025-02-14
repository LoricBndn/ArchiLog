**Exercice de Contrôle  : Gestion Dynamique des Options pour les Boissons**

---

### Contexte

Vous êtes chargé de développer une application pour la gestion des commandes dans un café. Dans ce café, chaque boisson possède un prix de base, mais les clients peuvent personnaliser leur commande en ajoutant diverses options (par exemple : lait, sucre, caramel, chantilly, etc.). Ces options peuvent être combinées de manière flexible et il doit être possible d’en ajouter de nouvelles ultérieurement, sans avoir à modifier le code existant des boissons de base.

---

### Objectifs

- **Analyse et conception :** Identifier et justifier le choix du design pattern le plus adapté pour permettre l’ajout dynamique de fonctionnalités (options) à une boisson.
- **Implémentation :** Développer une solution qui respecte qui permette de calculer le prix final et d'afficher la description complète d'une boisson avec ses options.

---

### Tâches à Réaliser

#### 1. Analyse et Sélection du Design Pattern

- **Étude du problème :** Analysez le besoin d’ajouter dynamiquement des comportements à un objet (ici, une boisson) sans modifier sa structure de base.
- **Choix du pattern :** Sélectionnez le design pattern le plus approprié pour répondre à ce besoin.
- **Justification :** Dans un court document ou en commentaire en tête de votre code.

#### 2. Implémentation

- **Définition de la Boisson :**
    
    - Créez une interface ou une classe abstraite pour représenter une boisson.
    - Implémentez au moins deux types de boissons (par exemple, un Espresso et un Thé) avec leur prix de base respectif.
- **Ajout des Options :**
    
    - Créez des classes permettant d’ajouter dynamiquement des options à une boisson (par exemple, Lait, Sucre, Caramel, etc.).
    - Chaque option doit pouvoir modifier le coût final de la boisson et enrichir sa description.
    - Assurez-vous que ces options peuvent être cumulées de manière flexible et que l’ordre d’ajout n’affecte pas le comportement final.
- **Calcul et Affichage :**
    
    - Implémentez une méthode pour calculer et retourner le coût total d'une boisson incluant toutes ses options.
    - Implémentez également une méthode pour générer et retourner une description complète de la boisson, détaillant les options ajoutées.
