
'use client'
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { NavBarMenu } from './NavBarMenu';
import { CiMenuFries } from "react-icons/ci";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='toggle'> 
      <button className='button-menu' onClick={handleToggle}>
      <CiMenuFries /> </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
          
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            
          >
            <NavBarMenu/> 
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToggleMenu;
