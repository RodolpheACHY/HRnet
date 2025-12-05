# HRnet – Migration d'un plugin jQuery vers React

Projet réalisé dans le cadre du parcours **Développeur d’Applications JavaScript / React – OpenClassrooms**.  
Objectif : **remplacer une librairie jQuery vieillissante par un composant React moderne, performant et maintenable**, tout en améliorant l’interface HRnet, un outil interne de gestion des employés.

---

## 🎯 Objectif du projet

Ce projet consiste à moderniser une application interne utilisée par une grande société financière.  
La principale mission : **convertir un plugin jQuery existant en un composant React réutilisable**, entièrement intégré dans l’application.

Cette migration permet de :

- réduire la **dette technique**
- améliorer la **performance** et le **rendement DOM**
- moderniser l’expérience utilisateur
- renforcer la **maintenabilité** du code
- standardiser les composants sous React

Un rapport de performance avant/après a également été produit.

---

## 🚀 Fonctionnalités principales

- **Création d’employés** (formulaire complet + validations)
- **Tableau des employés** avec recherche, tri et pagination
- **Modale React moderne** (remplacement du plugin jQuery)
- **Design responsive**
- **Persistance des données dans localStorage**
- **Interface claire et intuitive**

---

## 🧩 Le composant React (migration jQuery → React)

Dans la version d’origine, HRnet utilisait une librairie jQuery pour la gestion d’une fenêtre modale.

Dans cette refonte :

✔ Un **composant React modulaire**, léger et accessible a été créé  
✔ Le composant a été isolé, documenté et **publié sous forme de package npm**  
✔ Le code jQuery a été totalement supprimé  
✔ Le composant est réutilisable dans n’importe quel projet React

👉 *(Ajouter ici ton lien npm si tu veux le mettre en avant)*

---

## 📊 Analyse des performances

Un audit avant/après migration a été réalisé :

| Critère | Avant (jQuery) | Après (React) |
|--------|----------------|---------------|
| Manipulation DOM | ⚠️ élevée | ✅ minimisée |
| Temps de rendu | ⚠️ plus lent | ✅ amélioré |
| Maintenabilité | ❌ faible | ⭐ excellente |
| Accessibilité | ❌ limitée | ⭐ conforme WAI-ARIA |

Le rapport complet est disponible dans `/docs/`.

---

## 🛠️ Installation du projet  

### 1️⃣ Cloner le dépôt  

```
git clone https://github.com/RodolpheACHY/HRnet.git
cd HRnet
```

### 2️⃣ Installer les dépendances  

```
bash
npm install
```

### 3️⃣ Lancer en développement  
```
bash
npm run dev
```

👉 Rendez-vous sur :
http://localhost:5173

## 🎨 Fonctionnalités en détail
✔ Formulaire de création  
- Validation en temps réel
- Sélection de dates (React DatePicker)
- Sélecteurs dynamiques (React Select)
- Messages d’erreur utilisateurs

✔ Tableau des employés
- Tri par colonne
- Recherche globale
- Pagination
- Interface responsive
-Table construite avec TanStack Table

✔ Persistance des données
- Stockage local via localStorage
- Données conservées après rafraîchissement
- Gestion propre du store via Zustand

## 🎯 Utilisation

### Créer un employé
1. Rendez-vous sur la page « Créer un employé »
2. Remplissez le formulaire avec les informations de l’employé
3. Cliquez sur « Enregistrer » pour ajouter l’employé au système

### Consulter les employés
1. Accédez à la page « Liste des employés »
2. Utilisez la barre de recherche pour trouver un employé spécifique
3. Triez les colonnes en cliquant sur leur en-tête
4. Ajustez le nombre d’entrées affichées par page

## 🛠️ Built With

- **React** - Frontend framework
- **Vite** - Build tool and development server
- **React Router** - Navigation
- **React DatePicker** - Date selection
- **React Select** - Enhanced select components
- **TanStack Table** - Data table with sorting and filtering
- **Zustand** - State management
- **CSS3** - Styling

## 🧱 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── Layout.jsx
│   ├── Modal.jsx
│   └── Navigation.jsx
├── pages/               # Pages principales
│   ├── CreateEmployee.jsx
│   └── EmployeeList.jsx
├── store/               # Store Zustand
│   └── employeeStore.js
├── data/                # Données statiques
│   ├── states.js
│   └── departments.js
└── App.jsx              # Composant racine
```

## 🚀 Déploiement

### Build de production

```
npm run build
```

### Prévisualisation du build

```
npm run preview
```

Application disponible sur :  
👉 http://localhost:4173

## 🤝 Contribuer

1. Forker le projet

2. Créer une branche :

```
git checkout -b feature/NouvelleFeature
```

3. Commit :

```
git commit -m "Ajout d'une nouvelle fonctionnalité"
```

4. Push :

```
git push origin feature/NouvelleFeature
```

5. Ouvrir une Pull Request

## 🔗 Lien vers le composant NPM crée

Modal :  
https://www.npmjs.com/package/@jamijamo/modal-component

## 📝 Licence  
Ce projet est distribué sous licence MIT.

## 👨‍💻 Auteur  
Rodolphe ACHY  
GitHub : [@RodolpheACHY](https://github.com/RodolpheACHY/)

## 🙏 Remerciements  
- OpenClassrooms pour le scénario pédagogique  
- L’équipe React pour l’écosystème puissant  
- TanStack pour la librairie de tableaux  
- Tous les testeurs et relecteurs du projet
