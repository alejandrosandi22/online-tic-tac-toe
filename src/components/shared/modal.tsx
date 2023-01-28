import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({ children, setShow, show }: PortalProps) {
  const portalRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.querySelector('#portal');
    document.addEventListener('mousedown', (e) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(e.target as Node)) {
          setShow(false);
        }
      }
    });

    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  return mounted && show && portalRef.current
    ? createPortal(
        <>
          <section className='modal-container z-50 fixed top-0 w-full h-full bg-gray-600/20 backdrop-blur-sm flex items-center justify-center'>
            <div ref={modalRef}>{children}</div>
          </section>

          <style jsx>{`
            .modal-container {
              animation: show 0.2s both;
            }
            @keyframes show {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 100;
              }
            }
          `}</style>
        </>,
        portalRef.current
      )
    : null;
}
