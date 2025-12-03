
# Portfolio — Jean Rochelle

Un site statique (HTML + CSS + JS) prêt pour GitHub Pages.

## Structure
- `index.html` — Accueil
- `projets.html` — Projets
- `voyages.html` — Voyages
- `contact.html` — Contact
- `css/styles.css` — Styles globaux
- `js/main.js` — Petits scripts (année, révélation email/tel)
- `assets/images/` — Place tes images ici

## Remplacer les images
- Portrait : `assets/images/portrait.jpg` (carré recommandé)
- Projet Birdhouse : `assets/images/p-connected-birdhouse.jpg`
- Voyage Kaunas : `assets/images/v-kaunas.jpg`

## Ajouter un projet
Duplique le bloc `<article class="card">` dans `projets.html` et modifie :
- titre, type/année, description, rôle, compétences
- change le chemin d'image et le lien (GitHub/Démo)

## Ajouter un voyage
Duplique un `<article class="card">` dans `voyages.html`. Renseigne :
- destination, période, contexte
- 2–4 puces "ce que ça m'a apporté"
- image(s)

## Sécurité contact
Le mail et le numéro sont masqués par défaut et révélés au clic via `js/main.js`.

