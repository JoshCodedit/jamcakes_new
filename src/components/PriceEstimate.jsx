import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../utils/emailjs';
import cakeData from '../data/cakeData';

export default function PriceEstimate({ showForm, setShowForm }) {
  const [selectedCake, setSelectedCake] = useState('');
  const [selectedFillings, setSelectedFillings] = useState([]);
  const [selectedFrosting, setSelectedFrosting] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isVegan, setIsVegan] = useState(false);
  const [orderDescription, setOrderDescription] = useState('');
  const [selectedExtraCategory, setSelectedExtraCategory] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const handleFillingChange = (filling) => {
    if (selectedFillings.includes(filling)) {
      setSelectedFillings(selectedFillings.filter((f) => f !== filling));
    } else if (selectedFillings.length < 2) {
      setSelectedFillings([...selectedFillings, filling]);
    }
  };

  const calculatePrice = () => {
    let price = 0;

    if (selectedSize === '6') price = 75;
    if (selectedSize === '8') price = 90;
    if (selectedSize === '10') price = 100;

    if (selectedCake.startsWith('premium-')) price += 10;

    if (selectedFrosting === 'Ganache') price += 15;

    if (selectedExtraCategory === 'Acrylic') price += 20;
    if (selectedExtraCategory === 'Themed Sets') price += 15;
    if (
      selectedExtraCategory === 'Cardstock' ||
      selectedExtraCategory === 'Edible Images' ||
      selectedExtraCategory === 'Flowers'
    )
      price += 10;
    if (selectedExtraCategory === 'Alcohol Miniatures' || selectedExtraCategory === 'Gold Leaf')
      price += 5;
    if (isVegan) price += 10;

    setTotalPrice(price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !selectedCake ||
      !selectedSize ||
      selectedFillings.length === 0 ||
      !selectedFrosting ||
      !customerName ||
      !customerEmail
    ) {
      alert('Please fill in all required fields');
      return;
    }

    calculatePrice();

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          to_name: 'The Cakery Team',
          name: customerName,
          email: customerEmail,
          subject: 'New Cake Price Estimate Request',
          telephone: customerPhone || 'Not provided',
          message: `
                        Customer Details:
                        Name: ${customerName}
                        Email: ${customerEmail}
                        Phone: ${customerPhone || 'Not provided'}

                        Order Details:
                        Cake Type: ${selectedCake}
                        Size: ${selectedSize}"
                        Fillings: ${selectedFillings.join(', ')}
                        Frosting: ${selectedFrosting}
                        Vegan: ${isVegan ? 'Yes' : 'No'}
                        Extra Category: ${selectedExtraCategory || 'None'}
                        Total Price: £${totalPrice}
                        
                        Additional Description:
                        ${orderDescription || 'None provided'}
                    `,
        },
        emailConfig.publicKey
      );

      alert('Request sent successfully! We will get back to you as soon as possible.');
      // Optionally reset form here
    } catch (error) {
      alert('Failed to send price estimate. Please try again.');
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [selectedSize, selectedCake, selectedExtraCategory, selectedFrosting, isVegan]);

  return (
    <>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mx-auto mt-4 block bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow"
      >
        Get Price Estimate
      </button>

      {showForm && (
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white/80 rounded-lg shadow-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                <option value="">Select a size</option>
                <option value="6">6"</option>
                <option value="8">8"</option>
                <option value="10">10"</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Cake Flavour</label>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 mb-2">Standard</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cakeData.standardSponge.map((flavour) => (
                      <label key={flavour} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="cakeFlavour"
                          value={`standard-${flavour}`}
                          checked={selectedCake === `standard-${flavour}`}
                          onChange={(e) => setSelectedCake(e.target.value)}
                        />
                        <span>{flavour}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 mb-2">Premium</p>
                  <div className="grid grid-cols-2 gap-2">
                    {cakeData.premiumSponge.map((flavour) => (
                      <label key={flavour} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="cakeFlavour"
                          value={`premium-${flavour}`}
                          checked={selectedCake === `premium-${flavour}`}
                          onChange={(e) => setSelectedCake(e.target.value)}
                        />
                        <span>{flavour}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Filling</label>
              <div className="grid grid-cols-2 gap-2">
                {cakeData.fillings.map((filling) => (
                  <label key={filling} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={selectedFillings.includes(filling)}
                      onChange={() => handleFillingChange(filling)}
                      disabled={!selectedFillings.includes(filling) && selectedFillings.length >= 2}
                    />
                    <span>{filling}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Frosting</label>
              <div className="grid grid-cols-2 gap-2">
                {cakeData.frostings.map((frosting) => (
                  <label key={frosting} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="frosting"
                      value={frosting}
                      checked={selectedFrosting === frosting}
                      onChange={() => setSelectedFrosting(frosting)}
                    />
                    <span>{frosting}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isVegan}
                  onChange={(e) => setIsVegan(e.target.checked)}
                  className="form-checkbox"
                />
                <span className="text-gray-700 font-semibold">Vegan</span>
              </label>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Toppers</label>
              <div className="grid grid-cols-2 gap-2">
                {cakeData.toppers.map((topper) => (
                  <label key={topper} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="extras"
                      value={topper}
                      checked={selectedExtraCategory === topper}
                      onChange={(e) => setSelectedExtraCategory(e.target.value)}
                    />
                    <span>{topper}</span>
                  </label>
                ))}
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="extras"
                    value=""
                    checked={selectedExtraCategory === ''}
                    onChange={(e) => setSelectedExtraCategory(e.target.value)}
                  />
                  <span>None</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Order Description</label>
              <textarea
                value={orderDescription}
                onChange={(e) => setOrderDescription(e.target.value)}
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder="Please be as descriptive as possible about your order requirements (e.g., design preferences, specific dietary requirements, occasion, colour scheme, etc.)"
              />
            </div>

            <div className="text-xl font-bold text-center mb-4">
              Estimated Price From: £{totalPrice}
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full p-2 border rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
