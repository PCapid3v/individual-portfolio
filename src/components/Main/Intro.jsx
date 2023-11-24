import ImgIntro from '../../assets/images/gigi.jpg'
import './Main.css'
 
export default function Intro() {
    return (
    <section className="intro" id="home">
        <h1 className="section__title section__title--intro">
            Hi, I am <strong>Pierluigi Capirci</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">front-end dev</p>
        <img src={ImgIntro} alt="a picture of Pierluigi smiling" className="intro__img" />
    </section>
    )
}