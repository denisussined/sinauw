import s from './Mobile.module.sass'
import button_1 from '../../images/mobile_button_1.svg'
import button_2 from '../../images/mobile_button_2.svg'
import right from '../../images/mobile_right.svg'

const Mobile = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.left}>
                <div className={s.left__title}>Get Our Apps, Now!</div>
                <div className={s.left__description}>Reach out our apps everywhere and everytime with Sinauw Mobile Application.</div>
                <div className={s.left__buttons}>
                    <img className={s.left__button} src={button_1} alt="button_1"/>
                    <img className={s.left__button} src={button_2} alt="button_2"/>
                </div>
            </div>
            <div className={s.right}>
                <img className={s.right__image} src={right} alt="right"/>
            </div>
        </div>
    )
}

export default Mobile