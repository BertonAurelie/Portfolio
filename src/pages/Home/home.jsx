import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CurvedText from '../../components/curved_text/curvedText'
import Card from '../../components/card/Card'
import BoxIndexHeader from '../../components/boxIndexHeader/BoxIndexHeader'
import Form from '../../components/form/Form2'
import './style.scss'
import { BsArrowDown } from "react-icons/bs";
import justice from '../../assets/justice.webp'
import cloud from '../../assets/cloud2.webp'
import {data} from '../../data/data'

function Home () {



    return (  
        <>
            <Header />
            <main>
                <section id = "accueil">
                    <div 
                        className = "accueil__container"
                        
                    >
                            <BoxIndexHeader/>
                        <div className = "accueil__content">
                            <div className = "curvedText">
                                <CurvedText/>
                            </div>
                            <div className = "arrow">
                                <BsArrowDown />
                            </div>
                        </div>
                    </div>
                </section>
                <section id = "presentation"  >
                    <div className = "presentation__container" >
                        <BoxIndexHeader
                            section = "présentation"
                        />
                        <div className = "presentation__content">
                            <div className = "presentation__img">
                                <img src = {cloud} id="img1"></img>
                                <img src = {justice} id="img2"></img>
                            </div>
                            <div className ="presentation__text">
                                <div className = "ma__presentation">
                                <p>Issue d'une double licence droit-philosophie, j'ai travaillé durant 7 ans pour un cabinet d'avocats à la cour de Cassation et au conseil d'Etat.Lassée de ces procédures judiciaires immuables, j'ai suivi la formation développeur web d'OpenClassrooms pour une vie professionnelle plus riche intellectuellement et passionnante.</p>
                                </div>
                                <div className ="mes__competences">
                                    <p> Mes compétences : </p>
                                    <ul> 
                                        <li>Html/CSS</li>
                                        <li>Javascript</li>
                                        <li>React</li>
                                        <li>Node.js</li>
                                        <li>MongoDB</li>
                                        <li>VBA</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id = "projets">
                    <div className = "projets__container">
                        <BoxIndexHeader
                            section = "projets"
                        />
                        <div className ="projets__content">
                            <Card
                            item = {data}
                            />
                        </div>
                    </div>
                </section>
                <section id = "contact">
                    <div className = "contact__container">
                        <BoxIndexHeader
                            section = "contact"
                        />
                        <div className ="contact__content">
                            <Form/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home