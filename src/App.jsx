import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import Features from './components/Features';
import Operations from './components/Operations';
import Testimonials from './components/Testimonials';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isStickyNav, setIsStickyNav] = useState(false);
  const [sectionsVisible, setSectionsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Setup observers similar to the original JS implementation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsStickyNav(true);
      } else {
        setIsStickyNav(false);
      }
    };

    // Set up observers for sections
    const observeSections = () => {
      const section1 = document.getElementById('section--1');
      const section2 = document.getElementById('section--2');
      const section3 = document.getElementById('section--3');

      const sectionObserver = new IntersectionObserver(
        entries => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setSectionsVisible(prev => ({
              ...prev,
              [id.replace('--', '')]: true,
            }));
          }
        },
        { threshold: 0.2 }
      );

      if (section1) sectionObserver.observe(section1);
      if (section2) sectionObserver.observe(section2);
      if (section3) sectionObserver.observe(section3);
    };

    window.addEventListener('scroll', handleScroll);
    observeSections();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box as="main" minH="100vh">
      <Header openModal={openModal} isStickyNav={isStickyNav} />

      <Features isVisible={sectionsVisible.section1} />
      <Operations isVisible={sectionsVisible.section2} />
      <Testimonials isVisible={sectionsVisible.section3} />
      <SignUp openModal={openModal} />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </Box>
  );
}

export default App;
