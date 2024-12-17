import CakeType from './CakeType'

export default function CakeTypes() {
    return(
        <><div className="text-center">
            <h2>Our Cakes</h2>
            <p>View our range of cakes below</p>
        </div>
        <div className="flex justify-center">
        <CakeType
            image="./images/wedding-cake.jpg"
            cakeType="Wedding Cakes"
        />
        <CakeType
            image="./images/celebration-cake.jpg"
            cakeType="Celebration Cakes"
        />
        <CakeType
                image="./images/cupcakes.jpg"
                cakeType="CupCakes"
            />
        </div>
        </>
    )
}