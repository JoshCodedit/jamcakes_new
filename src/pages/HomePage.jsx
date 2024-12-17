import Header from '../components/Header'
import About from '../components/About'
import CakeTypes from '../components/CakeTypes'
import Flavours from '../components/Flavours'
import Extras from '../components/Extras'
export default function HomePage() {
    return (
        <div>
            <Header />
            <About />
            <CakeTypes />
            <div className="flex justify-center items-center gap-10 mb-10">
                <img src="./images/cake1.jpeg" alt="cake types" className="w-[35%]"/>
                <img src="./images/cake2.jpeg" alt="cake types" className="w-[35%]"/>
            </div>
            <div className="border-b border-[#00000061] max-w-[70%] mx-auto mb-10"></div>
            <Flavours />
            <Extras />
        </div>
    )
}
