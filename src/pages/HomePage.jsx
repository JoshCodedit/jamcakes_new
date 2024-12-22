import Header from '../components/Header'
import About from '../components/About'
import CakeTypes from '../components/CakeTypes'
import Flavours from '../components/Flavours'
import Extras from '../components/Extras'
import Carousel from '../components/Carousel'
export default function HomePage() {
    return (
        <div>
            <About />
            <CakeTypes />
            <Carousel />
            <Flavours />
            <Extras />
        </div>
    )
}
