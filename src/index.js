/* eslint-disable max-len */
// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import ChatRoom from 'src/components/ChatRoom';
import store from 'src/store';

// == Render
// 1. Élément React racine (celui qui contient l'ensemble de l'app)
//    => crée une structure d'objets imbriqués (DOM virtuel)
const rootReactElement = (
  <Provider store={store}>
    <ChatRoom />
  </Provider>
);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);

/*
1. Render - Rendu de l’élément racine dans le DOM depuis le point d’entrée
2. Découpage - Dans le composant racine
3. Composants - Portion d'ui, responsabilité = présentation
4. Styles - On peut y revenir sur la fin pour peaufiner
5. Props - Passer de la data statique déjà pour tester
6. Store - Le gardien du state
7. InitialState - State = source de vérité
8. Provider - Diffuseur de store = prérequis pour faire les branchements
9. Containers - mapStateToProps - Branchement en lecture. On veille à importer les containers =  composants enrichis de props
10. Containers - mapDispatchToProps - Branchements en écriture, fournisseur de fonctions qui dispatchent des actions
  10.1. Action Type - Constante qui stocke le type d’action = chaîne de caractère
  10.2. Action Creator - Fonction qui construit et retourne un objet action
  10.3. Reducer - Récepteur et traducteur des actions vers une modification du state
  10.4. Dispatch - Emission d'une action = d'une intention
  10.5. Event - Exécution, dans le composant, de la fonction reçue en props en réponse à un événement type onClick, onSubmit ou après un rendu dans useEffect
*/
