import styles from './RegistrationForm.module.css'
import {useDispatch} from "react-redux";
import {useState} from "react";
import {setUser} from "../../store/slices/userSlice";
export const RegistrationForm = () => {
    const dispatch = useDispatch()
    const [user, setUserLogin] = useState({email: '', pass: '', secPass: ''})

    const handleClick = (e) => {
        e.preventDefault()
        if (user.secPass !== user.pass){
            alert("Пароли не совпадают, попробуйте снова")
            return
        }
        console.log(user)
        //нужно сделать запрос sign up и получить id и токен юзера
        dispatch(setUser({
            email: user.email,
        }))
    }

    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <div className={styles.cont}>
                    <input placeholder='Введите ваш email' onChange={e => setUserLogin(prev => ({...prev, email: e.target.value }))}/>
                    <input placeholder='Введите пароль' onChange={e => setUserLogin(prev => ({...prev, pass: e.target.value }))}/>
                    <input placeholder='Повторите пароль' onChange={e => setUserLogin(prev => ({...prev, secPass: e.target.value }))}/>
                    <button className='btn' onClick={handleClick}>Зарегистрироваться</button>
                </div>
            </form>
        </div>
    )
}