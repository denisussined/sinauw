import s from './Footer.module.sass'
import logo from '../../images/footer_logo.svg'
import face from '../../images/footer_facebook.svg'
import inst from '../../images/footer_inst.svg'
import twit from '../../images/footer_twitter.svg'
import copy from '../../images/footer_copyright.svg'
import {useState} from "react";
import {useEffect} from "react";

let data = [
    ['Menu', 'Home' ,'Courses', 'Webinar'],
    ['Services', 'Materials Update' ,'Trusted Mentor', 'Trusted Mentor', 'Meeting'],
    ['Apps Download', 'Google Play Store' ,'App Store'],
    ['Further Information', 'Terms & Conditions' ,'Privacy Policy'],
]

const getWindowWidth = () => window.innerWidth

const Footer = () => {

    const [windowWidth, setWindowWidth] = useState(getWindowWidth())

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth(getWindowWidth()))
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.feedback}>
                    <img className={s.feedback__logo} src={logo} alt="logo" />
                    <div className={s.feedback__description}>Any feedback or questions?<br/>Contact us on our social media</div>
                    <div className={s.feedback__icons}>
                        <img src={face} alt="facebook"/>
                        <img src={inst} alt="instagram"/>
                        <img src={twit} alt="twitter"/>
                    </div>
                </div>

                {data.map((sectionData, index) => windowWidth <= 450
                    ? <SectionSmall key={index} sectionData={sectionData} />
                    : <SectionLarge key={index} sectionData={sectionData} />)}
            </div>
            <div className={s.copyright}>
                <img className={s.copyright__image} src={copy} alt="copyright"/>
            </div>
        </div>
    )
}

const SectionLarge = ({sectionData}) => {

    return (
        <div className={s.section}>
            {sectionData.map((row, index) => <span key={index} className={s.section__row}>{row}</span>)}
        </div>
    )
}

const SectionSmall = ({sectionData}) => {

    let [nestedMode, setNestedMode] = useState(false)

    return (
        <div className={s.section}>
            {sectionData.map((row, index) => index === 0
                ? <span key={index}
                        onClick={() => setNestedMode(prevState => !prevState)}
                        className={s.section__row}>
                    {row}
                    {nestedMode
                        ? <span className={s.section__arrow}>&#x25B2;</span>
                        : <span className={s.section__arrow}>&#x25BC;</span>
                    }
                </span>

                : <span key={index} hidden={!nestedMode} className={s.section__row}>{row}</span>
            )}
        </div>
    )
}

export default Footer