# TP - Todo App

## 1) Installer le projet via Vite.js

**Missions :**

- Utiliser le gestionnaire de dépendance `"yarn"`
- Nom du projet : todo-app
- Librairie React/Typescript -> `react-ts`
- Lancer l'application
- Initialiser Git
- Commit `"Init Project"`

## 2) Nettoyer l'arboresence

**Missions :**

- Travailler sur une nouvelle branche `"develop"`
- A la racine, créer un fichier `.prettierrc` [>> lien de la configuration <<](https://github.com/ffolituu/rgpd-app-itahitilab/blob/feature/zustand/.prettierrc)
- Retirer tous les fichiers css
- Dans le dossier `"src"`, créer un nouveau dossier `"assets"` puis déplacer les images (svg) dans ce dossier
- Nettoyer et mettre à jour les fichiers si nécessaire à commencer par le point d'entrée de l'application `index.html`
- Nettoyer et mettre à jour le fichier `App.ts` en modifiant le rendu `(ex:<h1>Todo APP</h1>)`
- Commit `"Clean Arcthitecture"`

## 3) Créer l'interface

> La page contient uniquement une `Navbar` et un simple tableau `Table` avec 3 colonnes de données (ID, Nom de la tâche, Actions)

### 3 . a) Le Rendu

_`/src/App.tsx`_

**Missions :**

- Installer la dépendance `react-bootstrap` avec `yarn` [(cf. doc officiel)](https://react-bootstrap.github.io/)
- Créer une Navbar avec uniquement un titre "Todo App"
- Créer un tableau "composant Table" : (Attention le tableau doit être dans un container)
  - ID
  - Nom de la tâche
  - Actions
    - Button modifier
    - Button supprimer
- Créer des données en dures sur 3 lignes
- Commit `"Create Render with React Bootstrap"`

### 4 . b) Les States

_`/src/App.tsx`_

> Lorsque l'on créé un composant qui communique avec des données dynamique, il faut toujours penser au différent cas de figure `(Aucun enregistrement, Chargement en cours..., Erreur de reception de données, données récupérées, etc...)`

**Missions :**

- Créer tous les states possibles
- Mettre à jour le rendu en fonction des states en incorporant les conditions (Rendu conditionnel)
- Tester le rendu en manipulant chacun des states si possible
- Commit `"Create States"`

### 4 . c) Communication avec des données tierces (API)

_`Postman`_

> Dès qu'un système tiers expose des APIs, cela signifie qu'il nous autorise (sous certaines conditions) à accéder à leur service de données ou de fonctionnalités :
>
> - MockAPI (APIs gratuits)
> - JsonPlaceholder (APIs gratuits)

**Missions :**

- Utiliser `MockAPI` pour ce TP
  - Créer un compte gratuit
  - Créer une ressource (table/collection) nommée `todos` uniquement
- Sur `PostMan` créer une collection nommée `"MockAPI"`
  - Créer une requête de création nommée `"Create Data"`, pour ajouter une nouvelle donnée
  - Créer une requête de lecture nommée `"Read Data"` ce qui permet d'avoir une liste de données
  - Créer une requête de mise à jour nommée `"Update Data"`
  - Créer une requête de suppression nommée `"Delete Data"`

On a désormais une collection avec toute les requêtes appliquant un système CRUD. La prochaine étape consistera à décliner ses réquêtes dans l'application

## 4) Afficher les données

_`/src/App.tsx`_

> Pour l'affichage de données, toujours se poser la question suivante :
>
> - A quelle moment dois-je faire afficher mes données ?
>   - Au moment ou il ya intéraction entre l'utilisateur et l'application ou au moment du chargement de la page ?

> Dans le cas d'une intéractivité entre l'utilisateur et l'application (ex: clique sur un bouton pour afficher les données) cela se fait à partir d'un `"Event"`

> Mais dans notre cas, on souhaite faire afficher les données dès que la page s'ouvre et/ou se rafraichit. Et dans ce genre de situation on fait appelle au `Hook "useEffect"`

**Missions :**

- A la suite de la déclaration des states, créer le hook `useEffect`
- Dans ce hook, récupérer les données en utilisant l'`API Fetch` du navigateur, possibilité de récupérer ce script depuis `Postman`
- Debogguer la récupération de données s'effectue bien
- `Setter` l'état correspondant aux données
- Commit `"Fetching Data"`

## 5) Créer un formulaire

\_`/src/App.tsx`

**Missions :**

- Créer un formulaire, au dessus de la table, avec un simple champs input `nom de la tâche` suivi d'un bouton `Enregistrer`
- A l'enregistrement, faire en sorte d'afficher la nouvelle tâche en début de liste du tableau
- Commit `"Create Form Data"`

## 6) Modifier une tâche

\_`/src/App.tsx`

**Missions :**

- Au clic sur le bouton `"Editer"` d'une tâche, faire apparaître ça valeur dans le champs input
- L'enregistrement de la modification doit bien être prise en chage
- Commit `"Update Form Data"`

## 7) Supprimer une tâche

\_`/src/App.tsx`

**Missions :**

- Retirer la tâche au clic sur le bouton `"Supprimer"`
- L'enregistrement de la suppression doit bien être prise en charge
- Commit `"Delete Form Data"`
