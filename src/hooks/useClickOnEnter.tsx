import { useCallback } from 'react';

/**
 * Custom hook that returns a function to emulate a click on an element
 * when the Enter key is pressed.
 *
 * @returns {function} The keydown handler function.
 */
function useClickOnEnter() {
  return useCallback(
    (event: React.KeyboardEvent<HTMLElement>, cb?: () => void) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        event.currentTarget.click();
        cb?.();
      }
    },
    []
  );
}

export default useClickOnEnter;
