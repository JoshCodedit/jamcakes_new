import CakeType from './CakeType'

export default function CakeTypes() {
    return(
        <><div className="text-center font-main-font">
            <h2 className="heading-text">Our Cakes</h2>
            <p className="body-text">View our range of cakes below</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-10">
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
            cakeType="Cupcakes"
        />
        </div>
        <div className="border-b mb-14 border-[#00000061] max-w-[70%] mx-auto"></div>
        </>
    )
}