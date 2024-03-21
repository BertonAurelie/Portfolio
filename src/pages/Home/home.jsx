import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CurvedText from '../../components/curved_text/curvedText'
import Card from '../../components/card/Card'
import BoxIndexHeader from '../../components/boxIndexHeader/BoxIndexHeader'
import './style.scss'
import { BsArrowDown } from "react-icons/bs";
import justice from '../../assets/justice.webp'
import cloud from '../../assets/cloud2.webp'



function Home () {
    return (  
        <>
            <Header />
            <main>
                <section className = "page1">
                    <div className = "page1__container">
                            <BoxIndexHeader/>
                        <div className = "curvedText">
                            <CurvedText/>
                        </div>
                        <div className = "arrow">
                            <BsArrowDown />
                        </div>
                    </div>
                </section>
                <section className = "page2">
                    <div className = "page2__container">
                        <BoxIndexHeader
                            section = "présentation"
                        />
                        <div className = "page2__content">
                            <div className = "page2__img">
                                <img src = {cloud} id="img1"></img>
                                <img src = {justice} id="img2"></img>
                            </div>
                            <div className ="page2__text">
                                <div className = "ma__presentation">
                                <p>Issue d'une double licence droit-philosophie, j'ai travaillé durant 7 ans pour un cabinet d'avocat à la cour de Cassation et au conseil d'Etat.Lassée de ces procédures judiciaires immuables, j'ai suivi la formation développeur web d'OpenClassrooms pour une vie professionnelle plus riche intellectuellement et passionnante.</p>
                                </div>
                                <div className ="mes__competences">
                                    <p> Mes compétences : </p>
                                    <ul> 
                                        <li>Html/CSS</li>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                        <li>MongoDB</li>
                                        <li>Express.js</li>
                                        <li>VBA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className = "page3">
                    <div className = "page3__container">
                        <BoxIndexHeader
                            section = "projets"
                        />
                        <div className ="page3__content">
                            <Card/>
                        </div>
                    </div>
                </section>
                <section className = "page4">
                    <div className = "page4__container">
                        <BoxIndexHeader
                            section = "contact"
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home