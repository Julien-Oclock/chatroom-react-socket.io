import{
  SET_MESSAGE_VALUE,
  SEND_NEW_MESSAGE,
  TOGGLE_SETTINGS,
  SET_FIELD_VALUE,

} from 'src/actions'
 import { getHighestId } from 'src/selector';

const INITIAL_STATE ={

  settings: {
    open: false,
    email : '',
    password : '',
  },
   user : {
     email : '',
     password : '',
   },
  pseudo : 'Me',
  currentMessage:'',
  messages : [
    {id:1, author: 'Super Chat bot', message: 'Hello world !', isOther :true},
    {id:2, author: 'Super Chat bot', message: 'How you doing ?', isOther :true},
    {id:3, author: 'Super Chat bot', message: 'Is anyone is here ? ', isOther :true},
    {id:4, author: 'Super Chat bot', message: 'Please answer me ! :(', isOther :true},
    {id:5, author: 'Me', message: 'Hi little robot !', isOther :false},
  ]
}


const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGE_VALUE :
      return {
        ...state,
        currentMessage : action.inputValue,
      }
    case SEND_NEW_MESSAGE : 
      return {
        ...state,
        messages : 
          [...state.messages,
          {
            id:getHighestId(state.messages)+1,
            author : state.pseudo,
            message: state.currentMessage,
          }
        ],
        currentMessage : ''
      };
      case  TOGGLE_SETTINGS :
        return{
          ...state,
          settings :{
            ...state.settings,
            open : !state.settings.open,
          }
        };
      case SET_FIELD_VALUE : 
        return{
          ...state,
          settings : {
            ...state.settings,
            [action.inputName] : action.value
          }
        };

    default:
      return state
  }
};

export default reducer;
