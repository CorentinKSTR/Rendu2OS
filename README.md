---

# Festival API

Cette application npm permet de récupérer des informations sur les festivals à partir de l'API du ministère de la Culture français.

## Installation

Pour utiliser cette application, vous devez d'abord installer les dépendances en exécutant la commande suivante :

```shell
npm install
```

## Utilisation

### Importation

Commencez par importer les fonctions nécessaires dans votre projet :

```javascript
const {
  getAllFestivals,
  getFestivalsByRegion,
  getFestivalsByDepartement,
  getFestivalsByDomaine
} = require('festival-api');
```

### Récupération de tous les festivals

La fonction `getAllFestivals` permet de récupérer tous les festivals disponibles :

```javascript
getAllFestivals()
  .then(festivals => {
    // Utilisez les festivals récupérés
    console.log(festivals);
  })
  .catch(error => {
    // Gérez les erreurs de récupération des festivals
    console.error('Une erreur s\'est produite lors de la récupération de tous les festivals :', error);
  });
```

### Récupération de festivals par région

Utilisez la fonction `getFestivalsByRegion` pour récupérer les festivals d'une région spécifique en passant le nom de la région en paramètre :

```javascript
const region = 'Normandie';

getFestivalsByRegion(region)
  .then(festivals => {
    // Utilisez les festivals récupérés
    console.log(festivals);
  })
  .catch(error => {
    // Gérez les erreurs de récupération des festivals par région
    console.error('Une erreur s\'est produite lors de la récupération des festivals par région :', error);
  });
```

### Récupération de festivals par département

Utilisez la fonction `getFestivalsByDepartement` pour récupérer les festivals d'un département spécifique en passant le code du département en paramètre :

```javascript
const departement = '92';

getFestivalsByDepartement(departement)
  .then(festivals => {
    // Utilisez les festivals récupérés
    console.log(festivals);
  })
  .catch(error => {
    // Gérez les erreurs de récupération des festivals par département
    console.error('Une erreur s\'est produite lors de la récupération des festivals par département :', error);
  });
```

### Récupération de festivals par domaine

Utilisez la fonction `getFestivalsByDomaine` pour récupérer les festivals d'un domaine spécifique en passant le nom du domaine en paramètre :

```javascript
const domaine = 'Danse';

getFestivalsByDomaine(domaine)
  .then(festivals => {
    // Utilisez les festivals récupérés
    console.log(festivals);
  })
  .catch(error => {
    // Gérez les erreurs de récupération des festivals par domaine
    console.error('Une erreur s\'est produite lors de la récupération des festivals par domaine :', error);
  });
```
