# exercice

Salut, le but de cet exercice est de voir comment tu es capable d'apprendre un framework, et de voir tes bonnes pratiques en terme de code.

Tu auras en charge de créer 2 pages
	- un dashboard avec graphique
	- une todolist


En premier lieu tu dois intaller ton environnement de dev
	- ```npm install```

Puis le lancer
	- ```npm start```


## menu
Le menu doit contenir deux liens, un pour le dashboard, un pour la todolist, sans rechargement de page.
Pour cela tu utiliseras la librairie history en pushtate

## Dashboard (librairie de ton choix)
Tu afficheras un graphique de la température qu'il fait à Paris par jour pour la semaine passée.
Tu utiliseras une api REST (celle que tu veux), avec une librairie ou en natif (choisi celle que tu veux si tu utilises une librairie)

Avec des fake data, tu affichera aussi 2 ou 3 encarts avec des informations tel que :
  - les derniers utilisateurs inscrits,
  - le pourcentage d'homme et de femme dans le monde (un camembert)
  - (pour le troisième je te laisse le choix)


## Todolist
L'ajout dans la todolist existe, mais il faut donner la possibilité de supprimer un item, et de le marqué comme fait (barrer seulement le texte)


Tu factoriseras le plus possible ton code, et utiliseras la modularité.

Tu créeras aussi un script npm qui buildera seulement le code en minifié.


## librairie utilisé
- history (https://github.com/reacttraining/history)
- cell (https://github.com/intercellular/cell)