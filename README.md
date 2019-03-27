# Invader

Au programme (!) : concevoir une application JavaScript pour afficher des modèles du [_street artiste_ "Invader"](https://fr.wikipedia.org/wiki/Invader_(artiste)), s'inspirant de l'univers du pixel art et plus spécifiquement du très célèbre jeu [_Space Invaders_](https://fr.wikipedia.org/wiki/Space_Invaders).

![rendu](rendu.png)

## Objectifs

- Conception un système d’interprétation de matrice simple en JS
- Gestion de différents type de blocs en CSS
- Positionnement des blocs en CSS
- Génération des éléments de navigation en JS

## Pistes techniques

- Encapsulation dans un module
- Boucles imbriquées
- Passage de données en `dataset`

## Brief

Conception d'une [ardoise numérique](https://www.google.com/search?q=t%C3%A9l%C3%A9cran&tbm=isch) de représentation en faux pixels, configurable pour afficher un dessin arbitraire :

- L'ardoise et les modèles de dessin doivent être séparés (nous voulons pouvoir ajouter de nouveaux modèles sans risquer de « casser » l'ardoise)
- Les modèles de dessin doivent être exprimés sous forme de code (dans un fichier JS)
- La taille de pixels est configurable
- Les types de pixels doivent être stylisables (nous voulons pouvoir changer les couleurs à loisir)
- Il est possible de naviguer entre les différents dessins qui seront affichés dans l'ardoise

Un exemple de modèle de dessin :

```
'xxxxxxxxxxxxx'
'xxx-xxxxx-xxx'
'xxxx-xxx-xxxx'
'xxx-------xxx'
'xx--x---x--xx'
'x-----------x'
'x-x-------x-x'
'x-x-xxxxx-x-x'
'xxxx--x--xxxx'
'xxxxxxxxxxxxx'
```

## Bonus

- :muscle: Mode carousel (défilement automatique des dessins au démarrage de l'application)
- :muscle: Couleurs aléatoires
- :muscle::muscle: Couleurs et/ou types de blocs configurables dans l'UI directement
- :muscle::muscle::muscle: Éditeur de dessin :tada:
