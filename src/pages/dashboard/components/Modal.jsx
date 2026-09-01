import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, title, icon, children }) {
  // Bloquear o scroll da página de trás quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-999 bg-slate-950 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* HEADER */}
      <div className="flex items-center gap-4 px-6 py-5 border-b border-blue-900/40 bg-slate-950 backdrop-blur-xl shadow-lg z-10">
        {/* ÍCONE */}
        {icon && (
          <div
            className="
              w-10 h-10
              flex items-center justify-center
              rounded-xl
              bg-cyan-500/10
              text-cyan-500
              border border-cyan-500/10
            "
          >
            <i className={`${icon} text-base`}></i>
          </div>
        )}

        {/* TÍTULO */}
        <div className="flex-1">
          <h2 className="text-white font-semibold text-lg">{title}</h2>

          <p className="text-xs text-slate-500 mt-1">Mukanda Cloud</p>
        </div>

        {/* FECHAR */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="
            w-10 h-10
            cursor-pointer
            flex items-center justify-center
            rounded-xl
            bg-slate-900
            border border-blue-900/40
            text-slate-400
            hover:text-white
            hover:bg-slate-800
            hover:border-cyan-500/30
            transition
          "
        >
          <i className="fas fa-times"></i>
        </button>
      </div>

      {/* BODY */}
      <div
        className="
          flex-1
          overflow-y-auto
          p-6 md:p-10
          bg-slate-950
          text-slate-300
          scrollbar-thin
          scrollbar-thumb-slate-700
        "
      >
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
