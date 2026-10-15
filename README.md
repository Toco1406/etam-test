**Démo en ligne :** https://etam-test.vercel.app/

# J’ETAM Live Show 2025 — Test d’intégration

Intégration responsive (mobile et desktop) de la page d’opération com « J’ETAM Live Show 2025 », à partir de la maquette Figma fournie, avec une popin d’inscription au jeu concours.

## Lancer le projet

Prérequis : Node.js 20 ou plus.

```bash
git clone https://github.com/Toco1406/etam-test.git
cd etam-test
npm install
npm run dev
```

La page est ensuite disponible sur `http://localhost:5173`.

Autres commandes :

- `npm run build` : génère la version de production dans `dist/`
- `npm run lint` : vérifie le code avec ESLint

## Stack technique

| Outil | Rôle |
| --- | --- |
| **React** | Découpage de la page en composants réutilisables |
| **Vite** | Serveur de développement et build |
| **CSS natif** | Variables CSS, BEM, mobile-first (sans framework CSS) |
| **ESLint** | Qualité du code |

Aucune librairie externe pour la popin ni pour le formulaire.

## Structure du projet

```
public/
  images/            Visuels exportés depuis Figma
  videos/            Vidéo du clap
src/
  components/        Un dossier par composant (.jsx + .css)
    Header/
    Hero/
    TextBlock/
    Cta/
    EditorialBlock/
    ImageDuo/
    ContestSection/
    Modal/
    SignupForm/
  data/
    content.json     Contenu de la page 
  styles/
    fonts.css        Déclaration des polices (@font-face)
    variables.css    Couleurs, typographies, tailles de texte
    base.css         Reset et styles globaux
  App.jsx            Assemblage des sections
  main.jsx           Point d’entrée
```
