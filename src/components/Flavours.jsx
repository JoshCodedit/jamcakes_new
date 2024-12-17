import backgroundImage from '../../public/images/background1.jpg'

export default function Flavours() {
    return(
        <div className='container relative mx-auto max-w-screen-md mt-7 p-4 
            bg-cover bg-center bg-no-repeat flex justify-center items-center' 
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
                boxShadow: 'inset 0 0 25px 12px #FDEFF6'
            }}>

            <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />
            
            <div id="about" className="relative z-10 font-main-font">
                <h2 className="heading-text">Flavours</h2>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Standard Sponge</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[453px]'>
                            <li>Vanilla</li>
                            <li>Spiced Vanilla</li>
                            <li>Chocolate</li>
                            <li>White Chocolate</li>
                            <li>Lemon</li>
                            <li>Coconut</li>
                            <li>Strawberry</li>
                            <li>Raspberry</li>
                            <li>Raspberry </li>
                            <li>Mango</li>
                            <li>Bubblegum</li>
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Premium Sponge</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[453px]'>
                            <li>Red Velvet</li>
                            <li>Oreo</li>
                            <li>Orange Choc</li>
                            <li>Peanut Butter</li>
                            <li>Biscoff</li>
                            <li>Caramel</li>
                            <li>Carrot</li>
                            <li>Banana</li>
                            <li>Marble </li>
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Fillings</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[453px]'>
                            <li>Strawberry</li>
                            <li>Raspberry</li>
                            <li>Cherry</li>
                            <li>Blackcurrant</li>
                            <li>Pineapple</li>
                            <li>Mango</li>
                            <li>Banana</li>
                            <li>Orange</li>
                            <li>Lemon</li>
                            <li>Caramel</li>
                            <li>Chocolate</li>
                            <li>White Chocolate</li>
                            <li>Oreo</li>
                            <li>Biscoff</li>
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Frostings</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[453px]'>
                            <li>Vanilla</li>
                            <li>Cream Cheese</li>
                            <li>Strawberry</li>
                            <li>Raspberry</li>
                            <li>Lemon</li>
                            <li>Caramel</li>
                            <li>Chocolate</li>
                            <li>White Chocolate</li>
                            <li>Oreo</li>
                            <li>Peanutt Butter</li>
                            <li>Biscoff</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}