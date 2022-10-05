import React, { useEffect} from 'react';
import {Routes,Route} from "react-router-dom";
import {privateRoute, userRoute} from "./routes";
import './App.sass'
import Loader from "./components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {AuthActionCreators} from "./store/AuthReducer/AuthActionCreators";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
    const [loadingReact, setLoadingReact] = React.useState(true)
    const dispatch = useDispatch()
    const auth = useSelector(state => state.AuthReducer.auth)
      useEffect(()=>{
        setTimeout(()=>{
          setLoadingReact(false)
        })

      },[loadingReact,auth])

    if(localStorage.getItem('auth')){
        dispatch(AuthActionCreators.setIsAuth(true))
    }
    if(loadingReact){
      return (
        <div className={'main'}>
          <Loader />
        </div>
      )
    } else {
    if(!auth){
        return (
            <div className={'main'}>
                <Routes>
                    {
                            privateRoute.map(item =>
                                <Route path={item.path} element={<item.component />} />

                            )

                    }
                    <Route path={'*'} element={<Login />} />
                </Routes>
            </div>
        );
    } else {
        return (
            <div className={'main'}>
                <div className={'main-page'}>
                    <Navbar />
                    <Routes>
                        {
                            userRoute.map(item =>
                                <Route path={item.path} element={<item.component />} />

                            )
                        }
                        <Route path={'*'} element={<Profile />} />
                    </Routes>

                </div>

            </div>
        );
    }


  }
}

export default App;
