
import { useState, useEffect, useCallback, useRef } from 'react';

const useIdleTimer = (onIdle: () => void, timeout: number) => {
  const timeoutId = useRef<number | null>(null);

  const resetTimer = useCallback(() => {
    if (timeoutId.current) {
      window.clearTimeout(timeoutId.current);
    }
    timeoutId.current = window.setTimeout(onIdle, timeout);
  }, [onIdle, timeout]);

  const handleEvent = useCallback(() => {
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];
    
    // Initial timer setup
    resetTimer();

    // Add event listeners
    events.forEach(event => window.addEventListener(event, handleEvent));

    // Cleanup
    return () => {
      if (timeoutId.current) {
        window.clearTimeout(timeoutId.current);
      }
      events.forEach(event => window.removeEventListener(event, handleEvent));
    };
  }, [resetTimer, handleEvent]);

  return { resetTimer };
};

export default useIdleTimer;
