export default function FileContextMenu({
  file,
  position,
  onClose,
  onOpen,
  onDownload,
  onRename,
  onShare,
}) {
  if (!file) return null;

  const handleAction = (action) => {
    action?.(file);
    onClose?.();
  };

  return (
    <>
      {/* Fechar ao clicar fora */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      <div
        className="
          fixed
          z-50
          w-52
          bg-slate-950
          border border-blue-900/40
          rounded-xl
          shadow-2xl
          p-1.5
        "
        style={{
          top: position.top,
          left: position.left,
        }}
      >
        <button
          type="button"
          onClick={() => handleAction(onOpen)}
          className="
            w-full
            flex items-center gap-3
            px-3 py-2.5
            rounded-lg
            text-sm
            text-slate-300
            hover:text-white
            hover:bg-slate-900
            transition
          "
        >
          <i className="fas fa-folder-open w-4 text-cyan-500"></i>
          Abrir
        </button>

        <button
          type="button"
          onClick={() => handleAction(onDownload)}
          className="
            w-full
            flex items-center gap-3
            px-3 py-2.5
            rounded-lg
            text-sm
            text-slate-300
            hover:text-white
            hover:bg-slate-900
            transition
          "
        >
          <i className="fas fa-download w-4 text-slate-400"></i>
          Baixar
        </button>

        <div className="h-px bg-blue-900/30 my-1" />

        <button
          type="button"
          onClick={() => handleAction(onRename)}
          className="
            w-full
            flex items-center gap-3
            px-3 py-2.5
            rounded-lg
            text-sm
            text-slate-300
            hover:text-white
            hover:bg-slate-900
            transition
          "
        >
          <i className="fas fa-pen w-4 text-slate-400"></i>
          Renomear
        </button>

        <button
          type="button"
          onClick={() => handleAction(onShare)}
          className="
            w-full
            flex items-center gap-3
            px-3 py-2.5
            rounded-lg
            text-sm
            text-slate-300
            hover:text-white
            hover:bg-slate-900
            transition
          "
        >
          <i className="fas fa-share-nodes w-4 text-slate-400"></i>
          Partilhar
        </button>
      </div>
    </>
  );
}
