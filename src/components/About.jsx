import backgroundImage from '../../public/images/background1.jpg';

export default function About() {
    return (
        <div className='container relative mx-auto max-w-screen-md mt-7 p-10 
            bg-cover bg-center bg-no-repeat flex justify-center items-center' 
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
                boxShadow: 'inset 0 0 25px 12px #FDEFF6'
            }}>

            <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />
            
            <div id="about" className="relative z-10 font-['Cormorant_SC']">
                <h2 className="mb-4 text-center text-2xl lg:text-3xl font-bold text-[#373737]">
                    Bespoke Cakery <br /> 
                    Based In London
                </h2>
                <p className='text-lg text-center text-[#525252] bg-white/30 rounded-lg p-4'>
                    Our cakery specializes in bespoke cakes and desserts, 
                    blending artistic designs with exceptional flavors. Whether it's a grand celebration 
                    or an intimate gathering, we create memorable treats that reflect your style, 
                    making every occasion truly special and delicious.
                </p>
            </div>
        </div>
    )
}