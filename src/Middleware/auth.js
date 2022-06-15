import {
  SEND_LOGIN
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

  console.log(store);
  console.log(action);
  console.log(next)
  switch (action.type) {
    case SEND_LOGIN:
      const {settings : {email, password}} = store.getState();
      // On va ici envoyer la requête Ajax
      console.log('mail : ' + email);
      console.log('password : ' + password);
      axios.post('/login',{
        email,
        password,
      })
      break;

    default:
      next(action);
      break
  }
}
