import s from './App.module.sass';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";

const App = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Header />
                <Hero />
                <Featured />

            </div>
        </div>
    )
}

export default App;
