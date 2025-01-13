import backgroundImage from '../assets/images/background1.jpg';
import cakeData from '../data/cakeData.json';

export default function Flavours() {
  return (
    <div
      className="container relative mx-auto max-w-screen-md mt-7 p-4 
            bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: 'inset 0 0 25px 12px #FDEFF6',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />

      <div id="about" className="relative z-10 font-main-font">
        <h2 className="heading-text">Flavours</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex flex-col">
            <h3 className="text-xl text-center">Standard Sponge</h3>
            <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[453px]">
              {cakeData.standardSponge.map((flavour, index) => (
                <li key={index}>{flavour}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl text-center">Premium Sponge</h3>
            <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[453px]">
              {cakeData.premiumSponge.map((flavour, index) => (
                <li key={index}>{flavour}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl text-center">Fillings</h3>
            <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[453px]">
              {cakeData.fillings.map((flavour, index) => (
                <li key={index}>{flavour}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-xl text-center">Frostings</h3>
            <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[453px]">
              {cakeData.frostings.map((flavour, index) => (
                <li key={index}>{flavour}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
