# Portfolio — AI & Automation Operator

Portfolio Next.js multi-pages présentant les expertises, études de cas, expériences et méthode de Pauline Faussurier.

## Installation et lancement

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev
```

Ouvrez ensuite [http://localhost:3000](http://localhost:3000). Pour vérifier la version de production :

```bash
npm run build
npm start
```

## Modifier le contenu

Tous les textes, projets, listes et liens personnels sont regroupés dans `data/portfolio.ts`. L’adresse email et le profil LinkedIn sont déjà configurés. La propriété `booking` reste disponible si vous souhaitez ajouter plus tard un lien de prise de rendez-vous.

## Structure

- `app/page.tsx` : page d’accueil ;
- `app/expertise`, `app/projets`, `app/parcours` : pages éditoriales dédiées ;
- `app/globals.css` : design system, responsive et animations ;
- `components/` : navigation, visuel abstrait, workflows et études de cas ;
- `data/portfolio.ts` : contenu éditable ;
- `public/` : favicon et futurs documents statiques.

## Déploiement Vercel

1. Créez un dépôt vide sur GitHub.
2. Décompressez l’archive fournie puis envoyez **le contenu du dossier** dans ce dépôt (`app`, `components`, `data`, `public`, `package.json`, etc.).
3. Dans Vercel, choisissez **Add New Project**, connectez le dépôt GitHub puis lancez le déploiement.

Le framework Next.js est détecté automatiquement ; aucune commande spécifique n’est nécessaire. Une fois votre adresse Vercel connue, remplacez `metadataBase` dans `app/layout.tsx` par le domaine final.
