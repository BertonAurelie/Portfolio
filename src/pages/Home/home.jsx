import smoke from "../../assets/smoke.png"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Home () {

    return (
        <div className = "mainpage__content">
            <Header />
            <img src={smoke} alt =""/>
            <Footer />
        </div>
    )
}

export default Home