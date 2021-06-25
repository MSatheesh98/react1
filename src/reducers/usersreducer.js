export default function usersReducer(state=[],action)
{

  switch(action.type)
  {
      case 'UsersAction':
          
      return action.payload; break;

    default:
        return state      
  }

}