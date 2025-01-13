import backgroundImage from '../assets/images/background1.jpg';

export default function Extras() {
  return (
    <div
      className="container relative mx-auto max-w-screen-md  p-10 
            bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: 'inset 0 0 25px 12px #FDEFF6',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />

      <div id="about" className="relative z-10 font-main-font">
        <h2 className="heading-text">Extras</h2>
        <p className="body-text bg-white/30 rounded-lg p-4">
          Chocolate Ganache - Milk, Dark, White <br />
          <i>(recommended for tiered displayed cakes, i.e. weddings)</i> <br />
          <br />
          Strawberries, Raspberries, Blueberries, Choc Chips, Sprinkles
          <br />
          <br />
          Alcohol: Brandy, Rum, Limoncello <br />
          <br />
          Coloured sponge available in standard flavours only
          <br />
          Rainbow Tie Dye Sponge
        </p>
      </div>
    </div>
  );
}
