import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CurvedText from '../../components/curved_text/curvedText'
import './style.scss'
import { BsArrowDown } from "react-icons/bs";



function Home () {
    return (  
        <>
            <Header />
            <main>
                <section className = "page1">
                    <div className = "page1__container">
                        <div class = "entete">
                            <div class="box1"></div>
                            <div class="box2">
                                <h1>Berton</h1>
                                <span>Aurélie</span>
                            </div>
                            <div class="box3"></div>    
                            <div class="box4">
                                <p>Portfolio</p>
                            </div>
                        </div>
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
                    </div>
                </section>
                <section className = "page3">
                    <div className = "page3__container">
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home