import backgroundImage from '../../public/images/background1.jpg'

export default function PriceList() {
    return (
        <div className='container relative mx-auto max-w-screen-md mt-7 p-4 
            bg-cover bg-center bg-no-repeat flex justify-center items-center' 
            style={{ 
                backgroundImage: `url(${backgroundImage})`,
                boxShadow: 'inset 0 0 25px 12px #FDEFF6'
            }}>

            <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />
            
            <div id="about" className="relative z-10 font-main-font">
                <h2 className="heading-text">Price List</h2>
                <div className='flex flex-col md:flex-row gap-5'>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Fruit Cakes</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[270px]'>
                            <li className="mb-11">6" £35</li>
                            <li className="mb-11">8" £45</li>
                            <li className>10" £60</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Cakes</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[253px]'>
                            <li className="mb-10">5"2 £55</li>
                            <li className="mb-10">6"2 £75</li>
                            <li className="mb-10">8"2 £90</li>
                            <li className="mb-2">10"2 £100</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Tall Cakes</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[253px]'>
                            <li className="mb-10">5"3 - £75</li>
                            <li className="mb-10">6"3 - £90</li>
                            <li className="mb-10">8"3 - £120</li>
                            <li className="mb-2">10"3 - £150</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Tiered Cakes</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[253px]'>
                            <li className="mb-10">6 & 5" - £150</li>
                            <li className="mb-10">8 & 6" - £90</li>
                            <li className="mb-10">8, 6, 4" - £120</li>
                            <li className="mb-2">10, 8, 6" - £150</li>
                        </ul>
                    </div>

                    {/* <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Premium Sponge</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[453px]'>
                            {cakeData.premiumSponge.map((flavour, index) => (
                                <li key={index}>{flavour}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Fillings</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[453px]'>
                            {cakeData.fillings.map((flavour, index) => (
                                <li key={index}>{flavour}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex flex-col'>
                        <h3 className='text-xl text-center'>Frostings</h3>
                        <ul className='body-text bg-white/30 rounded-lg p-4 min-h-[453px]'>
                            {cakeData.frostings.map((flavour, index) => (
                                <li key={index}>{flavour}</li>
                            ))}
                        </ul>
                    </div>
                </div> */}
                </div>
            </div>
        </div>
    )
}