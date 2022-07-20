import s from './Classes.module.sass'
import photo_1 from '../../images/classes_image_1.svg'
import photo_2 from '../../images/classes_image_2.svg'
import photo_3 from '../../images/classes_image_3.svg'
import photo_4 from '../../images/classes_image_4.svg'
import ava_1 from '../../images/classes_avatar_1.svg'
import ava_2 from '../../images/classes_avatar_2.svg'
import ava_3 from '../../images/classes_avatar_3.svg'
import ava_4 from '../../images/classes_avatar_4.svg'
import {useState} from "react";

const data = [
    {
        photo: photo_1,
        videosCount: "12 Videos",
        type: 'Technology',
        title: 'Digital Marketing Strategy',
        text: 'This course aims to give you deeper understanding of core processes ...',
        avatar: ava_1,
        name: 'Joey Piere',
        mentor: 'Mentor'
    },
    {
        photo: photo_2,
        videosCount: "10 Videos",
        type: 'Design',
        title: 'Figma Fundamental',
        text: 'These lessons and exercises will help you start designing with Figma ...',
        avatar: ava_2,
        name: 'Araya Sheila',
        mentor: 'Mentor'
    },
    {
        photo: photo_3,
        videosCount: "16 Videos",
        type: 'Coding',
        title: 'HTML Fundamental',
        text: 'Well organized and easy to make you understand tutorials with lots of ...',
        avatar: ava_3,
        name: 'Ellisa Ruth',
        mentor: 'Mentor'
    },
    {
        photo: photo_4,
        videosCount: "12 Videos",
        type: 'Coding',
        title: 'Android App Development',
        text: 'Take your Android coding skills to the next level, advanced Android app ...',
        avatar: ava_4,
        name: 'Wendy Troye',
        mentor: 'Mentor'
    },
]

const Classes = () => {

    let [visited, setVisited] = useState([])

    return (
        <div className={s.wrapper}>
            <div className={s.title}>What Do You Want to Learn?</div>
            <div className={s.desc}>Choose the right class as you need. Then enjoy studying.</div>

            <div className={s.container}>
                {data.map((card, index) => <Card key={index} index={index} visited={visited} setVisited={setVisited} {...card}/>)}
            </div>

            <button className={s.showButton}>Show All Classes</button>
        </div>
    )
}

const Card = ({photo, type, title, text, avatar, name, mentor, index, visited, setVisited}) => {

    return (
        <div className={s.card}>
            <div className={visited.includes(index) ? `${s.card__container} ${s.active}` : s.card__container}>
                <img className={s.card__photo} src={photo} alt="photo"/>
                <div className={s.card__type}>{type}</div>
                <div className={s.card__title}>{title}</div>
                <div className={s.card__text}>{text}</div>
                <div className={s.card__mentor} onClick={() => setVisited(() => [index])}>
                    <img className={s.card__avatar} src={avatar} alt="avatar"/>
                    <span className={s.card__name}>{name}</span>
                    <span className={s.card__rank}>{mentor}</span>
                </div>
                <button hidden={!visited.includes(index)} className={s.card__button}>Access class</button>
            </div>
        </div>
    )
}

export default Classes