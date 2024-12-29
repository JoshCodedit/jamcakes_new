import { Link } from 'react-router-dom'

export default function CakeType({ image, cakeType, value }) {
    return(
        <div className="relative">
            <img className="w-[320px]" src={image} alt={cakeType} />
            <Link to={`/gallery?filter=${value}`}>
                <p className="absolute bottom-0 w-full text-center bg-[#fbdaeb3b]/90 text-nav-link p-2 hover:bg-brand-pink/95">
                    {cakeType}
                </p>
            </Link>
        </div>
    )
}