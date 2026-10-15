import { useEffect, useRef } from 'react'
import './Modal.css'

function Modal({ isOpen, onClose, title, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current

    if (isOpen && !dialog.open) {
      dialog.showModal()
    }
    if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      onClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
    >
      <div className="modal__content">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>

        <h2 id="modal-title" className="modal__title">
          {title}
        </h2>

        {children}
      </div>
    </dialog>
  )
}

export default Modal