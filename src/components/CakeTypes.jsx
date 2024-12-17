import CakeType from './CakeType'

export default function CakeTypes() {
    return(
        <><div className="text-center font-main-font">
            <h2 className="heading-text">Our Cakes</h2>
            <p className="body-text">View our range of cakes below</p>
        </div>
        <div className="flex justify-center items-center">
        <CakeType
            image="./images/wedding-cake.jpeg"
            cakeType="Wedding Cakes"
        />
        <CakeType
            image="./images/celebration-cake.jpeg"
            cakeType="Celebration Cakes"
        />
        <CakeType
                image="./images/cupcakes.jpeg"
                cakeType="CupCakes"
            />
        </div>
        </>
    )
}