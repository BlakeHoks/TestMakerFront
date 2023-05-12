import '../styles/Layout.css'
import {Link, NavLink, Outlet} from "react-router-dom";
import {useAuth} from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from '../store/slices/userSlice'

function Layout(){
    const {isAuth} = useAuth()
    const dispatch = useDispatch()
    return(
        <div>
            <header className='header'>
                <nav className="menu">
                    <div className="logo">
                        <img alt="Mirea" src="https://www.mirea.ru/upload/medialibrary/80f/MIREA_Gerb_Colour.png"/>
                    </div>
                    <div className="menu-center">
                        <ul className="menu-main">
                            <li className="nav-item"><NavLink to="/">Главная</NavLink></li>
                            <li className="nav-item"><NavLink to="/makeTest">Создать тест</NavLink></li>
                            <li className="nav-item"><NavLink to="/tests">Тесты</NavLink></li>
                            <li className="nav-item"><NavLink to="/contacts">Контакты</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        {!isAuth ?
                            <ul className="menu-main">
                                <li className="nav-item"><Link to="/registration">Зарегистрироваться</Link></li>
                                <li className="nav-item"><Link to="/auth">Войти</Link></li>
                            </ul>
                            :
                            <ul className="menu-main">
                                <li className="nav-item"><Link onClick={() => dispatch(removeUser())} to="/">Выйти</Link></li>
                            </ul>
                        }
                    </div>
                </nav>
            </header>
            <Outlet/>
            <footer className='footer'>
                <p>2023</p>
            </footer>
        </div>
    )
}
export {Layout};