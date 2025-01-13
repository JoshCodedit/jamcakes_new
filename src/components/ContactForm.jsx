import background1 from '../assets/images/background1.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../utils/emailjs';

emailjs.init(emailConfig.publicKey);

const formControls = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9 },
};

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          to_name: 'The Cakery Team',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'No subject',
          telephone: formData.telephone || 'Not provided',
          message: formData.message,
        },
        emailConfig.publicKey
      );

      alert('Message sent successfully! We will get back to you as soon as possible.');
      setFormData({
        name: '',
        email: '',
        telephone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div
      className="container relative mx-auto max-w-screen-md mt-7 p-4 
                bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${background1})`,
        boxShadow: 'inset 0 0 25px 12px #FDEFF6',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#FDEFF6]/2 via-transparent to-[#FDEFF6]/2" />

      <div className="relative z-10 bg-white/80 rounded-lg shadow-lg m-4 p-4 md:p-6 max-w-72 sm:max-w-xl mx-auto">
        <motion.h2
          className="heading-text"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Send Us A Message
        </motion.h2>
        <p className="mb-6 text-center">You can send us an enquiry using the form below.</p>
        <p className="mb-8 italic text-center">
          If you'd like to include a photo with your message then please email us at <br />
          <a
            href="mailto:info@thecakeryleamington.co.uk"
            className="text-blue-600 hover:underline text-center"
          >
            jambakescakes@hotmail.com
          </a>
        </p>

        <motion.form
          className="space-y-4"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          onSubmit={handleSubmit}
        >
          <motion.div variants={formControls}>
            <label htmlFor="name" className="block mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full p-2 border rounded-md"
              value={formData.name}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={formControls}>
            <label htmlFor="email" className="block mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full p-2 border rounded-md"
              value={formData.email}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={formControls}>
            <label htmlFor="telephone" className="block mb-2">
              Contact Telephone (optional)
            </label>
            <input
              type="tel"
              id="telephone"
              className="w-full p-2 border rounded-md"
              value={formData.telephone}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={formControls}>
            <label htmlFor="subject" className="block mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border rounded-md"
              value={formData.subject}
              onChange={handleChange}
            />
          </motion.div>

          <motion.div variants={formControls}>
            <label htmlFor="message" className="block mb-2">
              Your Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows="3"
              className="w-full p-2 border rounded-md"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </motion.div>

          <motion.button
            variants={formControls}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-pink-200 hover:bg-pink-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow"
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
