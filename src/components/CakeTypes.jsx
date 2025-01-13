import CakeType from './CakeType';

export default function CakeTypes() {
  return (
    <>
      <div className="text-center font-main-font">
        <h2 className="heading-text">Our Cakes</h2>
        <p className="body-text">View our range of cakes below</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 my-10">
        <CakeType
          image="src/assets/images/wedding-cake.jpeg"
          cakeType="Wedding Cakes"
          value="wedding"
        />
        <CakeType
          image="src/assets/images/celebration-cake.jpeg"
          cakeType="Celebration Cakes"
          value="celebration"
        />
        <CakeType image="src/assets/images/cupcakes.jpeg" cakeType="Cupcakes" value="cupcakes" />
      </div>
      <div className="border-b mb-14 border-[#00000061] max-w-[70%] mx-auto"></div>
    </>
  );
}
