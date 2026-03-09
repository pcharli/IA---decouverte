# Déroulé pédagogique du matin (3h30)
## 9:00 — Introduction (15 min)

Objectif :
- comprendre comment fonctionne une page web

Schéma simple :

1. HTML → structure
2. CSS → style
3. JavaScript → interaction

Montre un exemple simple dans le navigateur + DevTools.

## Github pages
- Création du compte
- Connecter VSCode à Github
- Pousser le projet
- Mise en ligne
    - Dans le repo :
    - Aller dans Settings
    - Menu Pages
        - Section Build and deployment
        - Source : Deploy from a branch
        - Branch : main
        - Folder : /root
        - Cliquer Save

## 8:15 — Créer une première page HTML (30 min)
Objectif : comprendre la structure d’une page.

Exercice :

Créer une page “Découvrir Bruxelles”.

## 9:15 — Styliser avec CSS (40 min)
Ajouter :
- police
- couleur
- marges
- header
- footer

Concepts :
- sélecteurs
- classes
- box model
- BEM

## 9:55 — Interaction JS (30 min)
Ajouter un lieu en JS

Concepts :
- DOM
- événement
- fonction

## 10:45 — Découverte API (20 min)
Exemple avec fetch

Concepts :
- API
- JSON
- réseau

## 11:10 Exercice
Page Contact

## 13:00 Exercice
Projet : Carte des fontaines d’eau potable de Bruxelles

Technos :
- Leaflet
- API open data de Brussels

Fonctionnalités :
1. charger Leaflet
2. afficher la carte centrée sur la GradPlace
3. charger l'API Bruxelles (rayon de 1 km)
4. afficher markers sur un calque
5. popup avec info

Bonus :
1. Être géolocalisé
2. Choisir un point sur la carte
3. Ajouter un cercle avec le rayon
4. click sur un point d'eau et affichage du chemin à pieds à partir de ma position

## Ressources :
- OpenData Bruxelels : https://bruxellesdata.opendatasoft.com/pages/home/
- API : https://bruxellesdata.opendatasoft.com/api/records/1.0/search/?dataset=fontaines-d-eau-potable-gerees-par-la-ville-de-bruxelles&geofilter.distance=50.8466,4.3528,300
- API moderne : within_distance(geo_point_2d, geom'POINT(4.3528 50.8466)', 1km)
    - soit : https://bruxellesdata.opendatasoft.com/api/explore/v2.1/catalog/datasets/fontaines-d-eau-potable-gerees-par-la-ville-de-bruxelles/records?where=within_distance(geo_point_2d, geom'POINT(4.3528 50.8466)', 1km)&limit=20
- Leaflet : css + js
- API chemin à pieds : 