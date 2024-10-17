import { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaTimes } from 'react-icons/fa'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    throw new Error("El elemento con id 'modal-root' no existe en el DOM.")
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-[#242526] rounded-lg shadow-lg w-full max-w-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
          aria-label="Cerrar modal"
        >
          <FaTimes size={20} />
        </button>

        {title && <h2 className="text-2xl font-bold mb-4 text-[#e4e6ea]">{title}</h2>}

        <div>{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
