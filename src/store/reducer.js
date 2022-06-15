import {
  SET_MESSAGE_VALUE,
  SEND_NEW_MESSAGE,
  TOGGLE_SETTINGS,
  SET_FIELD_VALUE,
  SEND_LOGIN,
  SET_PSEUDO,
  SET_COLOR
} from 'src/actions';

import {
  getHighestId,
} from 'src/selectors';

const INITIAL_STATE = {
  settings: {
    open: false,
    email: '',
    password: '',
    loading : false
  },
  currentMessage: '',
  pseudo: 'Me',
  color:null,
  messages: [{
    id: 1,
    author: 'Super Chat',
    message: 'Salut ça va ?',
  },
  {
    id: 2,
    author: 'Super Chat',
    message: 'T\'a pas des super croquettes ?',
  },
  {
    id: 3,
    author: 'Super Chat',
    message: 'Stp !',
  },
  {
    id: 4,
    author: 'Me',
    message: 'Non c\'est pas bon pour ce que t\'a !',
  }],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGE_VALUE:
      return {
        ...state,
        currentMessage: action.inputValue,
      };
    case SEND_NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: (getHighestId(state.messages) + 1),
            author: state.pseudo,
            message: state.currentMessage,
            isOther: false,
          },
        ],
        currentMessage: '',
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          open: !state.settings.open,
        },
      };
    case SET_FIELD_VALUE:
      return {
        ...state,
        settings: {
          ...state.settings,
          [action.fieldName]: action.value,
        },
      };
      case SEND_LOGIN :
        return {
          ...state,
          settings: {
            ...state.settings,
            loading:true,
            open : false
          },
        };
      case SET_PSEUDO :
        return {
          ...state,
          settings: {
            ...state.settings,
            loading : false
          },
          pseudo : action.pseudo
        }
      case SET_COLOR :
        return {
          ...state,
          color : action.color
        }
    default:
      return state;
  }
};

export default reducer;
