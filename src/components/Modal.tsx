import { X } from 'lucide-react';
import { useEffect } from 'react';
import { Language } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  language: Language;
}

export default function Modal({ isOpen, onClose, children, language }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-neutral-900 text-text-primary rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-slideUp transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con botón cerrar */}
        <div className="sticky top-0 bg-neutral-900 border-b border-neutral-700 p-4 flex justify-end z-10">
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary-dark rounded-full transition-colors text-text-primary"
            aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
          >
            <X size={24} />
          </button>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
