'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            opacity: 0,
            y: 20,
          },
          animate: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
          exit: {
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function CurtainTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={{
          initial: {
            clipPath: 'inset(0 0 100% 0)',
          },
          animate: {
            clipPath: 'inset(0 0 0% 0)',
            transition: {
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
          exit: {
            clipPath: 'inset(100% 0 0 0)',
            transition: {
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            },
          },
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
