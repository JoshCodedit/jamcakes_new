import { motion } from 'framer-motion';
import { useState } from 'react';
import PriceList from '../components/PriceList';
import PriceEstimate from '../components/PriceEstimate';

export default function PriceGuide() {
  const [showForm, setShowForm] = useState(false);

  const handleFormToggle = () => {
    setShowForm(!showForm);

    setTimeout(() => {
      const viewportHeight = window.innerHeight * 0.75;
      window.scrollBy({
        top: viewportHeight,
        behavior: 'smooth',
      });
    }, 800);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <PriceList />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-center color-red font-bold">BASIC PRICE ONLY, DECOR NOT INCLUDED</p>
        <p className="text-center">Click below for an estimation and to submit a query</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <PriceEstimate
          id="price-estimate-form"
          showForm={showForm}
          setShowForm={handleFormToggle}
        />
      </motion.div>
    </>
  );
}
