import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function ModalSmall({ isOpen, onClose, title, icon, children }) {
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
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
      {/* MODAL */}
      <div
        className="
          w-full max-w-md
          bg-slate-950
          border border-blue-900/40
          rounded-2xl
          shadow-2xl
          overflow-hidden
          animate-in fade-in zoom-in-95 duration-200
        "
      >
        {/* HEADER */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-blue-900/40">
          {icon && (
            <div
              className="
                w-9 h-9
                flex items-center justify-center
                rounded-xl
                bg-cyan-500/10
                text-cyan-500
                border border-cyan-500/10
              "
            >
              <i className={`${icon} text-sm`}></i>
            </div>
          )}

          <div className="flex-1">
            <h2 className="text-sm font-semibold text-white">{title}</h2>

            <p className="text-xs text-slate-500 mt-1">Mukanda Cloud</p>
          </div>

          {/* FECHAR */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="
              w-8 h-8
              cursor-pointer
              flex items-center justify-center
              rounded-lg
              bg-slate-900
              border border-blue-900/40
              text-slate-500
              hover:text-white
              hover:bg-slate-800
              hover:border-cyan-500/30
              transition
            "
          >
            <i className="fas fa-times text-sm"></i>
          </button>
        </div>

        {/* BODY */}
        <div className="p-5 text-slate-300">{children}</div>
      </div>
    </div>,
    document.body,
  );
}
