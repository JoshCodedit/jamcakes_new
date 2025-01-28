import backgroundImage from '../assets/images/background1.jpg';
import cakeData from '../data/cakeData';

export default function PriceList() {
  const { prices } = cakeData;

  const PriceCard = ({ title, items }) => (
    <div className="flex flex-col">
      <h3 className="text-xl text-center">{title}</h3>
      <ul className="body-text bg-white/30 rounded-lg p-4 min-h-[253px]">
        {items.map((item, index) => (
          <li key={index} className="mb-10">
            {item.name} - £{item.price}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <div
        className="container relative mx-auto max-w-screen-md mt-7 p-4 
                bg-cover bg-center bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          boxShadow: 'inset 0 0 25px 12px #FDEFF6',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />

        <div className="relative z-10 font-main-font">
          <h2 className="heading-text">Price List</h2>
          <div className="flex flex-col md:flex-row gap-5 flex-wrap justify-center ">
            {Object.values(prices)
              .filter((category) => category.title) // Filter out additionalCosts
              .map((category, index) => (
                <PriceCard key={index} title={category.title} items={category.items} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
