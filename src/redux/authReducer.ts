const AUTH = "authReducer/AUTH";
const EXIT = "authReducer/EXIT";
interface IInitialState{
  email: string | null;
  password:string | null;
}

const initialState: any = {
  email: null,
  password: null
}

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        email: action.data.email,
        password: action.data.password
      }
    }
    case EXIT: {
      return {
        ...state,
        email: null,
        password: null
      }
    }
    default:
      return state
  }
}

export const authUser = (data : {email: string, password: string}) =>
  ({type: AUTH, data})

export const exitUser = () =>
  ({type: EXIT})
export default authReducer;