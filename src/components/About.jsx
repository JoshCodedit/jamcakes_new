import backgroundImage from '../../public/images/background1.jpg';

export default function About() {
  return (
    <div
      className="container relative mx-auto max-w-screen-md mt-7 mb-16 p-10 
            bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        boxShadow: 'inset 0 0 25px 12px #FDEFF6',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />

      <div id="about" className="relative z-10  font-main-font">
        <h2 className="heading-text">
          Bespoke Cakery <br />
          Based In London
        </h2>
        <p className="body-text bg-white/30 rounded-lg p-4">
          With 10 years of self-taught cake design experience, I started by creating cakes for
          family and friends, gradually building confidence through competitions. My passion led me
          to leave my full-time job and launch my own business. Since then, I’ve trained in modern
          wedding cakes, perfecting my craft to create beautiful, custom designs that bring special
          moments to life!
        </p>
      </div>
    </div>
  );
}
