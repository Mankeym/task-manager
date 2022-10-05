import React from 'react';
import './Login.sass'
import {useDispatch, useSelector} from "react-redux";
import {AuthActionCreators} from "../../store/AuthReducer/AuthActionCreators";

const Login = () => {
    const auth = useSelector(state=> state)
    const dispatch = useDispatch()
    const checkInput = (e) =>{
        if(e.currentTarget.value.length !== 0){
            e.currentTarget.nextElementSibling.classList.add('active')
        } else {
            e.currentTarget.nextElementSibling.classList.remove('active')
        }
    }
    const submitForm = (e) => {
        e.preventDefault()
        console.log(auth)
        console.log(e.target.elements.email.value)
        dispatch(AuthActionCreators.login(e.target.elements.email.value,e.target.elements.password.value))
        console.log(auth)
    }
    return (
        <div className={'login'}>
            <form className={'login__form'} onSubmit={submitForm}>
                <h2 className={'login__title'}>Авторизация</h2>
                <div className={'login__input-container'}>
                    <input onChange={checkInput} id={'email'} className={'login__input login__input_email'} type={'email'} autoComplete={'new-email'} placeholder={''} required={true} />
                    <label className={'login__label'} htmlFor={'email'}>
                        Email
                    </label>
                </div>
                <div className={'login__input-container'}>
                    <input onChange={checkInput} id={'password'} className={'login__input login__input_password'} type={"password"} autoComplete={'new-password'}/>
                    <label className={'login__label'} htmlFor={'password'}>
                        Password
                    </label>
                </div>
                <button className={'login__button'}>Вход</button>
            </form>
        </div>
    );
};

export default Login;
