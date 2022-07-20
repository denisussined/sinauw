import s from './App.module.sass';
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Featured from "./components/featured/Featured";
import Mobile from "./components/mobile/Mobile";
import Footer from "./components/footer/Footer";
import Classes from "./components/classes/Classes";
import Pricing from "./components/pricing/Pricing";
import Webinar from "./components/webinar/Webinar";



const App = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <Header />
                <Hero />
                <Featured />
                <Classes />
                <Pricing/>
                <Webinar />
                <Mobile />
                <Footer />
            </div>
        </div>
    )
}

export default App;
