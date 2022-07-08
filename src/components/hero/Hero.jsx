import s from './Hero.module.sass'
import student from '../../images/hero_student.svg'
import search from '../../images/hero_search.svg'

const Hero = () => {
    return (
        <div className={s.wrapper}>
            <img className={s.student} src={student} alt="student"/>

            <div className={s.info}>
                <h1 className={s.title}>Grow Your Skills To Advance Your Career Path</h1>

                <p className={s.addition}>We have something big for you who want to level up!</p>

                <div className={s.input}>
                    <input className={s.input__area} type="text" placeholder="What do you want to learn?"/>
                    <img className={s.input__search} src={search} alt="search"/>
                </div>

                <p className={s.addition}>Suggestions</p>

                <div className={s.suggestions}>
                    <div className={s.suggestions__row}>
                        <div className={s.suggestions_item}>UI UX Design</div>
                        <div className={s.suggestions_item}>CSS Fundamental</div>
                        <div className={s.suggestions_item}>3D Design Illustration</div>
                    </div>
                    <div className={s.suggestions__row}>
                        <div className={s.suggestions_item}>Website Development</div>
                        <div className={s.suggestions_item}>Logo Design</div>
                        <div className={s.suggestions_item}>Icon Design</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero