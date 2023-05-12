import styles from './CreateTest.module.css'
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";

const CreateTest = () => {
    const {isAuth} = useAuth()
    const nav = useNavigate()
    const handleClick = (e) =>{
        e.preventDefault()
        nav('/tests')
    }

    return isAuth ? (
        <form className={styles.form}>
            <input placeholder='Название теста'/>
            <button className='btn' onClick={e => handleClick(e)}>Создать</button>
        </form>
    ) : (
        <div>
            <p>Вы не зарегистрированы. Чтобы создавать тесты необхожимо зарегистрироваться и войти в профиль.</p>
            <br/>
            <Link to={'/auth'}>Войти</Link>
            <Link to={'/registration'}>Зарегистрироваться</Link>
        </div>
    )
}

export {CreateTest}