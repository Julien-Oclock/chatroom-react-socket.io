import {
  SEND_LOGIN,
  SET_PSEUDO,
  setPseudo,
  SET_COLOR,
  setColor
} from 'src/actions'

import axios from 'src/api';
/*
* Un middleware est une fonction qu'on va donner au store
* Le store s'en servira pour traduire des actions vers des effets
* ( autre qu'une modification de state ) par exemple :
*     - debug
*     - des requête Ajax
*     - des timers
* L'objet action passera tour à tour dans chaque middleware puis arrivera 
* enfin dans le reducer
*/
export default (store) => (next) => (action) => {
  const {settings : {email, password}} = store.getState();

  switch (action.type) {
    case SEND_LOGIN:
      // On va ici envoyer la requête Ajax
      //console.log('mail : ' + email);
      //console.log('password : ' + password);
      axios.post('/login',{
        email,
        password,
      }).then((result) =>{
        console.log(store)
        store.dispatch(setPseudo(result.data.pseudo))
      });
      next(action);
      break;
    
    case SET_PSEUDO :
      axios.get(`/theme/${email}`)
        .then((result) =>{
          console.log(store)
          store.dispatch(setColor(result.data.color))
      });

    default:
      next(action);
      break
  }
}
