import header from './Header.module.sass'
import logo from "../../images/header_logo.svg"
import lang from "../../images/header_language.svg"

const Header = () => {
    return (
        <div className={header.wrapper}>

            <div className={header.logo}>
                <img src={logo} alt="logo"/>
            </div>

            <div className={header.options}>
                <nav className={header.navbar}>
                    <span>Home</span>
                    <span>Courses</span>
                    <span>Webinar</span>
                    <span>Pricing</span>
                </nav>

                <div className={header.language}>
                    <img src={lang} alt="language"/>
                </div>
            </div>

            <div className={header.login}>
                <button>Login</button>
            </div>

        </div>
    )
}

export default Header