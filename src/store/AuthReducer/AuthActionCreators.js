import axios from "axios";

export const AuthActionCreators = {
    setIsAuth: (auth)=>({type:'SET_AUTHORIZE', payload: auth}),
    login: (username,password) => async (dispatch)=>{
        try {
            const response = await axios.get('./users.json')
            const mockUsers = response.data.find(users => users.email === username && users.password === password)
            if(mockUsers){
                localStorage.setItem('auth', 'auth')
                dispatch(AuthActionCreators.setIsAuth(true))
            }
        } catch (e) {

        }
    }
}
