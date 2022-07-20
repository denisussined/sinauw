import s from './Pricing.module.sass'
import ico_1 from '../../images/pricing_icon_1.svg'
import ico_2 from '../../images/pricing_icon_2.svg'
import ico_3 from '../../images/pricing_icon_3.svg'

const data = [
    {
        icon: ico_1,
        type: 'Free',
        price: 0,
        list: [
            "Free e-book for every class",
            "Materials update every day",
            "Free download material videos",
            "Unlock 5 material videos",
        ],
        button: 'Your Current Package'
    },
    {
        icon: ico_2,
        type: 'Express',
        price: 75,
        list: [
            "Free e-book for every class",
            "Materials update every day",
            "Free download material videos",
            "Meeting 2 times a week",
            "Unlock 15 material videos",
        ],
        button: 'Buy Express'
    },
    {
        icon: ico_3,
        type: 'Premium',
        price: 115,
        list: [
            "Free e-book for every class",
            "Materials update every day",
            "Free download material videos",
            "Private chat with mentor",
            "Private chat with mentor",
            "Unlock up to 30 material videos",
            "Unlimited saved class",
        ],
        button: 'Buy Premium'
    }
]

const Pricing = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.title}>Course Pricing</div>
            <div className={s.description}>Choose pricing that suits to your need.</div>
            <div className={s.container}>
                {data.map((card, index) => <Card key={index} {...card}/>)}
            </div>
        </div>
    )
}

const Card = ({icon, type, price, list, button}) => {
    return (
        <div className={s.card}>
            <div className={s.card__header}>
                <img className={s.card__icon} src={icon} alt="icon"/>
                <div className={s.card__type}>{type}</div>
                <div className={s.card__price}>
                    <span className={s.card__currency}>$</span>
                    <span className={s.card__number}>{price}</span>
                    <span className={s.card__month}>/ month</span>
                </div>
            </div>
            <ul className={s.card__list}>
                {list.map((row, index) => <li className={s.card__row} key={index}>{row}</li>)}
            </ul>
            <div className={s.card__button}>
                <button id={type.toLowerCase()} className={s.button}>{button}</button>
            </div>
        </div>
    )
}

export default Pricing