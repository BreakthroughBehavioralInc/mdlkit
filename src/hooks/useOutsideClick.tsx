import { useEffect } from 'react';

interface UseOutsideClickProps {
  ref: React.RefObject<any>;
  callback: () => void;
  active?: boolean;
  triggerRef?: React.RefObject<any>;
}

const triggeredByLocationModal = (target: HTMLElement) => {
  const mdliveModal = document.getElementsByClassName('mdlive-modal');
  const userLocation = mdliveModal[0]?.querySelector('#setUserLocation');

  return userLocation && mdliveModal[0]?.contains(target as Node);
};

/**
 * Hook to detect clicks or touches outside of the specified element.
 *
 * @param {UseOutsideClickProps} props - Properties to configure the hook.
 * @param {React.RefObject<any>} props.ref - Ref to the target element.
 * @param {Function} props.callback - Function to call when an outside click or touch is detected.
 * @param {boolean} [props.active=true] - Condition to determine if the hook should be active.
 * @param {React.RefObject<any>} [props.triggerRef] - Ref to the trigger element (e.g., a button) that should be ignored.
 */
function useOutsideClick(props: UseOutsideClickProps): void {
  const { ref, callback, active = true, triggerRef } = props;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const isWaitingRoom = ref.current?.id === 'waiting-room-card';
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        (!triggerRef ||
          !triggerRef.current ||
          !triggerRef.current.contains(event.target as Node))
      ) {
        // Avoid callback (close the wainting room modal) if the click is triggered by the location modal when the home page is loaded at the beginning
        if (
          isWaitingRoom &&
          triggeredByLocationModal(event.target as HTMLElement)
        ) {
          return;
        }
        callback();
      }
    }

    if (active) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, callback, active, triggerRef]);
}

export default useOutsideClick;
