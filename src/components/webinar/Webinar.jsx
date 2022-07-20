import s from './Webinar.module.sass'
import slide from '../../images/webinar_slide.svg'
import Carousel from "react-spring-3d-carousel";
import {useState} from "react";

const Webinar = () => {

    const [goToSlide, setGoToSlide] = useState(0)

    const slides = [
        {key: 1, content: <img className={s.slide} src={slide} alt="1" />},
        {key: 2, content: <img className={s.slide} src={slide} alt="1" />},
        {key: 3, content: <img className={s.slide} src={slide} alt="1" />},
    ].map((slide, index) => {
        return { ...slide, onClick: () => setGoToSlide(index) };
    })

    return (
        <div className={s.wrapper}>
            <div className={s.text}>
                <div className={s.title}>Live Online Webinar</div>
                <div className={s.description}>You can stream Webinar live on our apps.
                    Stay update on our Webinar, it’s Free!</div>
            </div>
            <Carousel slides={slides}
                      showNavigation={false}
                      offsetRadius={1}
                      goToSlide={goToSlide}
                      animationConfig={{
                          tension: 250,
                          friction: 30,
                      }}/>
            <div className={s.redirect}>See more webinar videos &#8594;</div>
        </div>
    )
}

export default Webinar