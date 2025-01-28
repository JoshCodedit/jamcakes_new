import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../utils/emailjs';
import cakeData from '../data/cakeData';

export default function PriceEstimate({ showForm, setShowForm }) {
  const [selectedCake, setSelectedCake] = useState('');
  const [selectedTier, setSelectedTier] = useState('');
  const [selectedFilling, setSelectedFilling] = useState('');
  const [selectedFrosting, setSelectedFrosting] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [isVegan, setIsVegan] = useState(false);
  const [orderDescription, setOrderDescription] = useState('');
  const [selectedExtraCategory, setSelectedExtraCategory] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  const calculatePrice = () => {
    let price = 0;
    const { prices } = cakeData;

    // Base price calculation
    if (selectedTier) {
      if (selectedTier === 'Two Tier (6 + 5)') {
        price = prices.tieredCakes.items[0].price;
      } else if (selectedTier === 'Two Tier (8 + 6)') {
        price = prices.tieredCakes.items[1].price;
      } else if (selectedTier === 'Three Tier (8 + 6 + 4)') {
        price = prices.tieredCakes.items[2].price;
      } else if (selectedTier === 'Three Tier (10 + 8 + 6)') {
        price = prices.tieredCakes.items[3].price;
      }
    } else {
      const shortCakePrice =
        prices.shortCakes.items.find((item) => item.size === selectedSize)?.price || 0;
      price = shortCakePrice;
    }

    // Add-ons
    if (selectedCake.startsWith('premium-')) {
      price += prices.additionalCosts.premiumFlavour;
    }

    // Ganache frosting
    if (selectedFrosting === 'Ganache') {
      price += prices.additionalCosts.ganacheFrosting;
    }

    // Toppers
    if (selectedExtraCategory) {
      price += prices.additionalCosts.toppers[selectedExtraCategory] || 0;
    }

    // Vegan option
    if (isVegan) {
      price += prices.additionalCosts.veganOption;
    }

    setTotalPrice(price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !selectedCake ||
      !selectedSize ||
      !selectedFilling ||
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
                        Filling: ${selectedFilling}
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
  }, [selectedSize, selectedCake, selectedExtraCategory, selectedFrosting, isVegan, selectedTier]);

  return (
    <>
      <button
        onClick={() => setShowForm(!showForm)}
        className="mx-auto mt-4 block bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow"
        aria-expanded={showForm}
        aria-controls="price-estimate-form"
      >
        Get Price Estimate
      </button>

      {showForm && (
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white/80 rounded-lg shadow-lg">
          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            id="price-estimate-form"
            aria-label="Cake price estimate form"
          >
            <fieldset>
              <legend className="text-gray-700 font-semibold mb-2">Cake Size</legend>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full p-2 border rounded-md"
                aria-required="true"
                aria-label="Select cake size"
              >
                <option value="">Select a size</option>
                <option value="5">5"</option>
                <option value="6">6"</option>
                <option value="8">8"</option>
                <option value="10">10"</option>
              </select>
            </fieldset>

            <fieldset>
              <legend className="text-gray-700 font-semibold mb-2">Cake Tiers</legend>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-required="true">
                  {cakeData.tiers.map((tier) => (
                    <label key={tier} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="cakeTier"
                        value={tier}
                        checked={selectedTier === tier}
                        onChange={(e) => setSelectedTier(e.target.value)}
                        aria-label={`Standard ${tier} flavour`}
                      />
                      <span>{tier}</span>
                    </label>
                  ))}
                </div>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-gray-700 font-semibold mb-2">Cake Flavour</legend>
              <div className="space-y-4">
                <fieldset>
                  <legend className="text-gray-600 mb-2">Standard Flavours</legend>
                  <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-required="true">
                    {cakeData.standardSponge.map((flavour) => (
                      <label key={flavour} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="cakeFlavour"
                          value={`standard-${flavour}`}
                          checked={selectedCake === `standard-${flavour}`}
                          onChange={(e) => setSelectedCake(e.target.value)}
                          aria-label={`Standard ${flavour} flavour`}
                        />
                        <span>{flavour}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-gray-600 mb-2">Premium Flavours</legend>
                  <div className="grid grid-cols-2 gap-2" role="radiogroup">
                    {cakeData.premiumSponge.map((flavour) => (
                      <label key={flavour} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="cakeFlavour"
                          value={`premium-${flavour}`}
                          checked={selectedCake === `premium-${flavour}`}
                          onChange={(e) => setSelectedCake(e.target.value)}
                          aria-label={`Premium ${flavour} flavour`}
                        />
                        <span>{flavour}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-gray-700 font-semibold mb-2">Filling</legend>
              <div
                className="grid grid-cols-2 gap-2"
                role="radiogroup"
                aria-required="true"
                aria-label="Cake filling options"
              >
                {cakeData.fillings.map((filling) => (
                  <label key={filling} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="filling"
                      value={filling}
                      checked={selectedFilling === filling}
                      onChange={(e) => setSelectedFilling(e.target.value)}
                      aria-label={`${filling} filling`}
                    />
                    <span>{filling}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-gray-700 font-semibold mb-2">Frosting</legend>
              <div className="grid grid-cols-2 gap-2" role="radiogroup" aria-required="true">
                {cakeData.frostings.map((frosting) => (
                  <label key={frosting} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="frosting"
                      value={frosting}
                      checked={selectedFrosting === frosting}
                      onChange={() => setSelectedFrosting(frosting)}
                      aria-label={`${frosting} frosting`}
                    />
                    <span>{frosting}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isVegan}
                  onChange={(e) => setIsVegan(e.target.checked)}
                  className="form-checkbox"
                  aria-label="Make cake vegan"
                />
                <span className="text-gray-700 font-semibold">Vegan</span>
              </label>
            </div>

            <fieldset>
              <legend className="text-gray-700 font-semibold mb-2">Cake Toppers</legend>
              <div className="grid grid-cols-2 gap-2" role="radiogroup">
                {cakeData.toppers.map((topper) => (
                  <label key={topper} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="extras"
                      value={topper}
                      checked={selectedExtraCategory === topper}
                      onChange={(e) => setSelectedExtraCategory(e.target.value)}
                      aria-label={`${topper} topper`}
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
                    aria-label="None topper"
                  />
                  <span>None</span>
                </label>
              </div>
            </fieldset>

            <div>
              <label htmlFor="order-description" className="block text-gray-700 font-semibold mb-2">
                Order Description
              </label>
              <textarea
                id="order-description"
                value={orderDescription}
                onChange={(e) => setOrderDescription(e.target.value)}
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder="Please be as descriptive as possible about your order requirements"
                aria-label="Additional order description"
              />
            </div>

            <div className="text-xl font-bold text-center mb-4" aria-live="polite">
              Estimated Price From: £{totalPrice}
            </div>

            <fieldset>
              <legend className="sr-only">Contact Information</legend>
              <div className="space-y-4">
                <div>
                  <label htmlFor="customer-name" className="block text-gray-700 font-semibold mb-2">
                    Name{' '}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="customer-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer-email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email{' '}
                    <span className="text-red-500" aria-hidden="true">
                      *
                    </span>
                  </label>
                  <input
                    id="customer-email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                    className="w-full p-2 border rounded-md"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="customer-phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    id="customer-phone"
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow"
              aria-label="Submit price estimate request"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
