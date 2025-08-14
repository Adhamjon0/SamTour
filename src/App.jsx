import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Gallery from './pages/Galery';
import Intro from './components/Intro';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -8 }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.35
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route path="/about" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><About /></motion.div>} />
        <Route path="/services" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Services /></motion.div>} />
        <Route path="/contact" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Contact /></motion.div>} />
        <Route path="/gallery" element={<motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}><Gallery /></motion.div>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="flex flex-col min-h-screen">
          {showIntro ? (
            <Intro onFinish={() => setShowIntro(false)} />
          ) : (
            <>
              <Header />
              <main className="flex-1">
                <AnimatedRoutes />
              </main>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </I18nextProvider>
  );
};

export default App;
