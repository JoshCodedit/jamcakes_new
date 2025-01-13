import { parseDoc } from '../utils/parse-doc';
import { useEffect, useState } from 'react';
import about1 from '../../public/images/about1.jpeg';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    parseDoc(
      'https://docs.google.com/document/d/e/2PACX-1vQhlP0dMMf6h7VsYTa7AlFPglFZFGHGelmt9DGYXeCvAiUM-Lfe1NYItYYuN4f2mUHczn9QsDUFJS8b/pub'
    )
      .then((content) => {
        setContent(content);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching upscaling content:', error);
        setError('Failed to load content. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="max-w-[1800px] mx-auto p-4">
      <motion.h1
        className="heading-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-col min-[1015px]:flex-row gap-28 mt-10 items-center justify-center mx-auto">
          <motion.div
            className="whitespace-pre-wrap min-[1015px]:w-1/4 text-[18px] text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={about1} alt="about" className="max-w-80 h-auto rounded-lg" />
          </motion.div>
        </div>
      )}
    </div>
  );
}
