import s from './Header.module.sass'
import logo from "../../images/header_logo.svg"
import lang from "../../images/header_language.svg"

const Header = () => {
    return (
        <div className={s.wrapper}>

            <div className={s.logo}>
                <img src={logo} alt="logo"/>
            </div>

            <nav className={s.navbar}>
                <span className={s.navbar__item}>Home</span>
                <span className={s.navbar__item}>Courses</span>
                <span className={s.navbar__item}>Webinar</span>
                <span className={s.navbar__item}>Pricing</span>
            </nav>

            <div className={s.language}>
                <img className={s.language__image} src={lang} alt="language"/>
            </div>

            <div className={s.login}>
                <button className={s.login__button}>Login</button>
            </div>

        </div>
    )
}

export default Header