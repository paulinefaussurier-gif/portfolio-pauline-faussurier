---
name: "Portfolio de Pauline Faussurier"
description: "Un manuel de systèmes modulaires déployé en portfolio éditorial multipage."
colors:
  ink: "#26234f"
  operational-blue: "#2857a8"
  operational-blue-hover: "#153b9f"
  logic-violet: "#6750b8"
  route-pink: "#b33c77"
  paper: "#ffffff"
  mist: "#f6f8ff"
  wash: "#f1f4fc"
  line: "#dfe4f2"
  muted-text: "#625d7d"
  contact-ink: "#17113f"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(3.2rem, 4.55vw, 5rem)"
    fontWeight: 760
    lineHeight: 0.99
    letterSpacing: "-0.035em"
  page-display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 5.3vw, 5.3rem)"
    fontWeight: 760
    lineHeight: 1.01
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 3.5vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, Arial, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.1em"
rounded:
  chip: "7px"
  index: "8px"
  brand-mark: "9px"
  button: "12px"
  module: "14px"
  chapter-mark: "15px"
  pill: "999px"
spacing:
  compact: "8px"
  control-gap: "12px"
  content: "24px"
  desktop-gutter: "32px"
  desktop-section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.operational-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0 21px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.operational-blue-hover}"
    textColor: "{colors.paper}"
    rounded: "{rounded.button}"
    padding: "0 21px"
    height: "50px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.button}"
    padding: "0 21px"
    height: "50px"
---

# Design System: Portfolio de Pauline Faussurier

## Overview

**Creative North Star: « Le manuel de systèmes modulaires »**

Le portfolio est éditorial dans sa hiérarchie, opérationnel dans ses schémas et précis dans ses connexions. Il rend visibles les règles, les flux, les contrôles et la place de l’humain sans recourir à une imagerie générique de l’IA. Le système lui-même devient l’image.

L’expérience est désormais multipage. L’accueil agit comme une couverture et un aiguillage concis ; Expertise, Projets et Parcours deviennent trois chapitres autonomes, reliés par une navigation persistante et un appel vers l’étape suivante. Cette architecture évite l’effet « CV interminable » tout en conservant une lecture séquentielle claire.

La composition associe grandes déclarations Manrope, micro-libellés techniques, lignes fines, index numérotés et alternances de surfaces. La palette adoucie — encre prune, bleu ardoise, violet grisé et rose framboise — conserve le caractère premium du monde initial avec moins de saturation.

**Key Characteristics:**

- Accueil synthétique ouvrant vers trois pages éditoriales
- Gabarit de page interne partagé : retour, grand titre, code et introduction
- Modules architecturaux, rails, timelines et chapitres numérotés
- Alternance de papier, brume, bleu et encre profonde
- Routes fines, points de passage et micro-libellés opérationnels
- Continuité explicite grâce aux bandeaux « Étape suivante »

## Colors

La palette est froide, posée et précise ; la couleur code les rôles du système avant de décorer les pages.

### Primary

- **Encre prune** : texte principal, champs éditoriaux sombres, premier chapitre projet et section d’apprentissage.
- **Bleu ardoise opérationnel** : actions primaires, icônes de parcours, index de niveaux et bandeaux de transition.

### Secondary

- **Violet logique grisé** : mots-clés et éléments qui signalent la logique interne du système.

### Tertiary

- **Rose framboise de route** : codes de page, index, connexions, points de passage et états actifs. Il reste minoritaire afin de conserver sa valeur de signal.

### Neutral

- **Papier** : fond principal, surfaces de détail et cartes claires.
- **Brume** et **lavis** : alternance des chapitres, tags et surfaces techniques secondaires.
- **Ligne froide** : bordures, divisions de grille, rails et séparateurs.
- **Texte secondaire** : paragraphes explicatifs et contenu de soutien.
- **Encre de contact** : fond terminal de l’accueil, plus sombre que les champs éditoriaux.

**The Signal Color Rule.** Le rose ne remplit pas de grande surface : il matérialise une relation, un repère ou un état actif.

**The Chapter Color Rule.** Les grandes surfaces alternent papier, brume, encre ou bleu ; violet et rose restent des accents de lecture.

## Typography

**Display Font:** Manrope (avec Arial puis sans-serif en repli)  
**Body Font:** Inter (avec Arial puis sans-serif en repli)

**Character:** Manrope apporte une autorité contemporaine aux titres, aux modules et aux libellés structurants. Inter garde les explications et les interactions neutres, lisibles et opérationnelles.

### Hierarchy

- **Display** : déclaration du hero d’accueil très dense, avec une hauteur de ligne inférieure à 1 et une taille plafonnée à 5rem sur desktop.
- **Page Display** : titres des pages Expertise, Projets et Parcours, légèrement plus grands et associés à un code de chapitre.
- **Headline** : titres de section compacts et fluides, généralement entre 2.25rem et 3.8rem.
- **Title** : titres de modules, capacités, projets et jalons ; taille adaptée au poids du bloc.
- **Body** : paragraphes généralement compris entre 13 et 17px, avec une hauteur de ligne généreuse de 1.55 à 1.78.
- **Label** : micro-libellés de 9 à 12px, souvent en capitales, espacés et renforcés pour évoquer l’annotation technique.

**The Two-Voice Rule.** Manrope structure et affirme ; Inter explique et permet d’agir. Ne pas introduire une troisième famille typographique.

## Layout

Toutes les pages utilisent une coquille centrée de 1240px maximum avec 32px de gouttière par côté sur desktop. La barre de navigation fixe mesure 72px. Les sections courantes respirent avec 110 à 130px de marge verticale ; le gabarit partagé des pages internes commence à 150px du haut et se termine par 90px d’espace bas.

L’accueil conserve un hero en deux colonnes presque égales, puis quatre preuves, trois grandes portes éditoriales, une présentation courte et le contact. Chaque porte est une rangée pleine largeur avec index, titre, explication et flèche ; ce motif remplace les groupes de cartes comme mécanisme principal d’orientation.

Les pages internes ouvrent sur une grille asymétrique à deux colonnes : grand titre à gauche, code de chapitre et introduction soulignés de rose à droite. Un bandeau bleu pleine largeur termine chaque page et dirige vers le chapitre suivant, créant une boucle Expertise → Projets → Parcours → Expertise.

### Expertise

La page progresse d’un rail de trois contextes vers une matrice sombre de six capacités en 3 × 2, puis vers une composition à deux colonnes où le cadrage reste fixe pendant que les trois niveaux d’intervention défilent. Les séparateurs et la numérotation portent la structure ; les cartes fermées ne sont pas le motif dominant.

### Projets

Un index horizontal de trois entrées donne accès aux chapitres ancrés. Les trois projets utilisent la même anatomie — marque numérotée, contexte, workflow, grille de quatre lectures et compétences — mais alternent encre, brume et papier. La répétition du cadre rend les projets comparables, tandis que le changement de surface marque leur individualité.

### Parcours

Une timeline verticale aligne numéro, rail, icône et contenu. Des détails contextualisés peuvent s’insérer dans un jalon, notamment tags de périmètre ou workflow. La page se poursuit par une section sombre d’apprentissage et de certifications, puis une synthèse éditoriale en deux colonnes.

À 980px et moins, les grilles principales deviennent monocolonnes, les matrices à trois colonnes passent à deux, le panneau fixe Expertise redevient statique et l’index Projet s’empile. À 620px et moins, la gouttière tombe à 16px, les actions s’empilent, toutes les matrices deviennent monocolonnes, les workflows pivotent verticalement et les icônes de timeline disparaissent pour préserver le rail et le contenu. Aucun workflow ne doit provoquer de défilement horizontal.

**The Structured Air Rule.** L’espace blanc sépare clairement les systèmes sans effacer leurs lignes, index et relations.

**The One Pattern per Page Rule.** Chaque page possède un motif dominant distinct — matrice, chapitres, timeline — tout en partageant le même gabarit éditorial.

## Elevation & Depth

La profondeur est structurelle et rare. La majorité des surfaces restent plates, séparées par la couleur de fond ou une bordure. Les modules pseudo-3D du hero portent une ombre aubergine décalée (`12px 18px 36px rgba(37,28,95,.15)`) et se redressent au survol. Le bouton principal reçoit une ombre bleue diffuse (`0 10px 26px rgba(28,71,191,.21)`). Les icônes de la timeline utilisent une ombre bleue légère (`8px 12px 24px rgba(40,87,168,.18)`).

**The Flat-by-Default Rule.** Une ombre signale une action majeure, un module en volume ou un jalon ; les contenus ordinaires reposent sur la grille, la tonalité et la bordure.

## Shapes

La géométrie associe des modules légèrement arrondis à des structures linéaires. Les boutons utilisent des angles souples de 12px, les modules et workflows 14px, les marques de chapitre 15px et les petits tags 7px. Les index de niveau sont des carrés de 30px à rayon 8px. La pilule complète est réservée au libellé de rôle du hero ; elle ne devient jamais la silhouette générique des boutons.

Les bordures restent fines, souvent d’un pixel. Les routes se terminent par de petits points circulaires. Rails, timelines, matrices et rangées de navigation utilisent la ligne comme structure continue plutôt que comme contour de carte.

## Components

### Navigation

La barre fixe de 72px flotte sur un papier translucide et flouté, avec une bordure basse froide. La marque associe un monogramme carré encre à un nom sobre. Les liens actifs, survolés ou focalisés prennent le rose de route. Sous 980px, un bouton de 44px ouvre un panneau vertical blanc sous la barre ; le nom complet disparaît sous 620px.

### Buttons

- **Shape:** rectangle souple de 12px, jamais en pilule.
- **Primary:** fond bleu opérationnel, texte blanc, hauteur minimale de 50px et ombre bleue diffuse.
- **Secondary:** papier blanc, encre prune et bordure froide.
- **Hover / Focus:** translation verticale de 2px au survol ; anneau rose-violet translucide de 3px et décalage de 3px au focus clavier.

### Page Hero

Le hero partagé des pages internes commence par un lien retour discret. Son grand titre occupe la colonne gauche ; la colonne droite reçoit le code de chapitre rose, une ligne haute rose et une introduction de 16px. Sur mobile, ces deux colonnes s’empilent sans perdre l’ordre titre → code → contexte.

### Portal Rows

Les portes de l’accueil et l’index Projets sont des rangées éditoriales séparées par des lignes. Elles réunissent index, libellé, explication et flèche sans fond de carte. Au survol, les grandes portes se déplacent de 8px et adoptent le bleu opérationnel.

### Expertise Patterns

Le rail de clarification présente trois étapes claires sur papier. La matrice de capacités inverse ensuite le contraste sur fond encre et organise six blocs égaux. La section des niveaux associe une introduction fixe à trois rangées détaillées, chacune marquée par un index bleu et des listes préfixées d’un tiret rose.

### Project Chapters

Chaque chapitre projet affiche une marque carrée de 84px, un titre, un contexte et un workflow, puis une grille 2 × 2 : problème, système, rôle humain et valeur. Les compétences apparaissent en petits tags bordés. Sur mobile, la marque se réduit à 56px et tous les détails s’empilent.

### Journey Timeline

Chaque jalon combine un numéro rose, un rail vertical, une icône bleue surélevée et un bloc éditorial séparé par une ligne. Les tags et workflows sont réservés aux expériences qui nécessitent un niveau de détail supplémentaire ; ils ne sont pas ajoutés uniformément à tous les jalons.

### Workflows and Tags

Un workflow est une séquence de libellés courts en capitales reliés par une ligne rose d’un pixel et des points de passage. Sur fond sombre, il repose dans un conteneur translucide bordé ; sur fond clair, il utilise le papier ou la brume. Les tags sont compacts, à rayon 7px, et servent aux compétences ou périmètres.

### Next-page Banner and Footer

Le bandeau d’étape suivante est une grande surface bleue d’au moins 190 à 210px de haut, structurée par un micro-libellé, une promesse Manrope et une flèche. Les pages internes se ferment ensuite sur un footer minimal donnant accès au contact ; l’accueil conserve un footer intégré à sa section de contact sombre.

### Motion

Les états interactifs utilisent des transitions brèves de 0.2 à 0.35 seconde. Les routes pointillées du système abstrait défilent lentement sur un cycle de 16 secondes. `prefers-reduced-motion` supprime le défilement doux, réduit les animations à une occurrence quasi instantanée et neutralise les transitions.

## Do's and Don'ts

### Do:

- **Do** traiter l’accueil comme un point d’entrée concis vers les trois chapitres.
- **Do** conserver le gabarit partagé des pages internes et le code de chapitre rose.
- **Do** donner à Expertise, Projets et Parcours leur motif dominant respectif : matrice, chapitres comparables et timeline.
- **Do** utiliser les lignes, routes, points et index pour rendre une logique opérationnelle visible.
- **Do** réserver la profondeur aux modules importants, jalons et actions principales.
- **Do** préserver les états actifs, le focus clavier et la réduction du mouvement.

### Don't:

- **Don't** retransformer le portfolio en une landing page unique à faire défiler.
- **Don't** introduire d’imagerie générique de cerveau, robot, réseau neuronal ou halo « IA ».
- **Don't** transformer tout le contenu en collection de cartes uniformes.
- **Don't** utiliser le rose comme grande surface décorative ou comme accent omniprésent.
- **Don't** généraliser les boutons en pilules ; cette forme appartient uniquement aux petits libellés de statut ou de rôle.
- **Don't** ajouter d’ombres fortes aux surfaces ordinaires ni multiplier les effets de verre.
