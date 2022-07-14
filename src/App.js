import s from './App.module.sass';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Mobile from "./components/mobile/Mobile";

const App = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Header />
                <Hero />
                <Mobile />
            </div>
        </div>
    )
}

export default App;
