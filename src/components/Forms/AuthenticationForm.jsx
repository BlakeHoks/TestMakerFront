import styles from './AuthenticationForm.module.css'
import {useDispatch} from "react-redux";
import {setUser} from '../../store/slices/userSlice'
import {useState} from "react";

export const AuthenticationForm = () => {
    const dispatch = useDispatch()
    const [user, setUserLogin] = useState({email: '', pass: ''})

    const handleClick = (e) => {
        e.preventDefault()
        console.log(user)
        //нужно сделать запрос log in и получить id и токен юзера
        dispatch(setUser({
            email: user.email,
        }))
    }


    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.cont}>
                    <input placeholder='Введите email' onChange={e => setUserLogin(prev => ({...prev, email: e.target.value }))}/>
                    <input placeholder='Введите пароль' type='password' onChange={e => setUserLogin(prev => ({...prev, pass: e.target.value }))}/>
                    <button className='btn' onClick={handleClick}>Войти</button>
                </div>
            </form>
        </div>
    )
}