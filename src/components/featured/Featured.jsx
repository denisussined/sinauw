import s from './Featured.module.sass'
import icon_1 from '../../images/featured_icon_1.svg'
import icon_2 from '../../images/featured_icon_2.svg'
import icon_3 from '../../images/featured_icon_3.svg'

const data = [
    {
        icon: icon_1,
        title: 'Get New Friends',
        text: 'You will meet new friends in some of classes that you take. Say hello to them and make friends, it will be so much warm friendship!'
    },
    {
        icon: icon_2,
        title: 'Expert and Fun Mentor',
        text: 'Learn with earnest and don’t forget to get relax too. Learn and enjoy the materials or classes with our expert mentors.'
    },
    {
        icon: icon_3,
        title: 'Flexible Access',
        text: 'You can access materials or classes easily by our website also mobile. Access it everywhere and everytime, no limit for you to learn!'
    },
]

const Featured = () => {
    return (
        <div className={s.wrapper}>
            {data.map((card, index) => <Card key={index} icon={card.icon} title={card.title} text={card.text}/>)}
        </div>
    )
}

const Card = ({icon, title, text}) => {
    return (
        <div className={s.card}>
            <img className={s.icon} src={icon} alt="icon"/>
            <div className={s.title}>{title}</div>
            <div className={s.text}>{text}</div>
        </div>
    )
}

export default Featured