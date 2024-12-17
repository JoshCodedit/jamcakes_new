import { Link } from 'react-router-dom'

export default function CakeType({ image, cakeType }) {
    return(
        <div>
            <img className="w-[220px]" src={image} alt={cakeType} />
            <Link to="/cake-type">
                <p>{cakeType}</p>
            </Link>
        </div>
    )
}