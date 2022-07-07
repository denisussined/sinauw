import app from './App.module.sass';
import Header from "./components/header/Header";

const App = () => {
    return (
        <div className={app.container}>
            <div className={app.wrapper}>
                <Header />
            </div>
        </div>
    )
}

export default App;
