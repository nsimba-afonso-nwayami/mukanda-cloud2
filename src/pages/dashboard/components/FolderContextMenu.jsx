import { useEffect, useRef } from "react";

export default function FolderContextMenu({
  folder,
  position,
  onClose,
  onOpen,
  onRename,
  onShare,
  onMove,
  onDelete,
}) {
  const menuRef = useRef(null);

  /*
   * Fechar quando clicar fora do menu.
   */
  useEffect(() => {
    const handleMouseDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [onClose]);

  return (
    <div
      ref={menuRef}
      onMouseDown={(event) => event.stopPropagation()}
      className="
        fixed
        z-50
        w-52
        bg-slate-950
        border border-blue-900/50
        rounded-xl
        shadow-2xl
        p-1.5
        overflow-hidden
      "
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {/* ABRIR */}
      <button
        type="button"
        onClick={() => onOpen(folder)}
        className="
          w-full
          flex items-center gap-3
          px-3 py-2.5
          rounded-lg
          text-sm text-slate-300
          hover:bg-slate-900
          hover:text-white
          transition
        "
      >
        <i className="fas fa-folder-open w-4 text-slate-500"></i>
        <span>Abrir</span>
      </button>

      {/* RENOMEAR */}
      <button
        type="button"
        onClick={() => onRename(folder)}
        className="
          w-full
          flex items-center gap-3
          px-3 py-2.5
          rounded-lg
          text-sm text-slate-300
          hover:bg-slate-900
          hover:text-white
          transition
        "
      >
        <i className="fas fa-pen w-4 text-slate-500"></i>
        <span>Renomear</span>
      </button>

      {/* PARTILHAR */}
      <button
        type="button"
        onClick={() => onShare(folder)}
        className="
          w-full
          flex items-center gap-3
          px-3 py-2.5
          rounded-lg
          text-sm text-slate-300
          hover:bg-slate-900
          hover:text-white
          transition
        "
      >
        <i className="fas fa-share-nodes w-4 text-slate-500"></i>
        <span>Partilhar</span>
      </button>

      {/* MOVER */}
      <button
        type="button"
        onClick={() => onMove(folder)}
        className="
          w-full
          flex items-center gap-3
          px-3 py-2.5
          rounded-lg
          text-sm text-slate-300
          hover:bg-slate-900
          hover:text-white
          transition
        "
      >
        <i className="fas fa-folder-tree w-4 text-slate-500"></i>
        <span>Mover</span>
      </button>

      <div className="my-1.5 border-t border-blue-900/30"></div>

      {/* ELIMINAR */}
      <button
        type="button"
        onClick={() => onDelete(folder)}
        className="
          w-full
          flex items-center gap-3
          px-3 py-2.5
          rounded-lg
          text-sm text-red-400
          hover:bg-red-500/10
          hover:text-red-300
          transition
        "
      >
        <i className="fas fa-trash w-4"></i>
        <span>Eliminar</span>
      </button>
    </div>
  );
}
