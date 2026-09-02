import { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import FileIcon from "./FileIcon";
import FileContextMenu from "./FileContextMenu";

export default function FilesView({ files = [] }) {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("list");
  const [contextMenu, setContextMenu] = useState(null);

  const searchRef = useRef(null);

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase()),
  );

  const searchResults = search ? filteredFiles.slice(0, 5) : [];

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setContextMenu(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleContextMenu = (event, file) => {
    event.preventDefault();

    const menuWidth = 208;
    const menuHeight = 220;

    let left = event.clientX;
    let top = event.clientY;

    if (left + menuWidth > window.innerWidth) {
      left = window.innerWidth - menuWidth - 10;
    }

    if (top + menuHeight > window.innerHeight) {
      top = window.innerHeight - menuHeight - 10;
    }

    setContextMenu({
      file,
      position: {
        top,
        left,
      },
    });
  };

  const handleOpen = (file) => {
    console.log("Abrir arquivo:", file);
  };

  const handleDownload = (file) => {
    console.log("Baixar arquivo:", file);
  };

  const handleRename = (file) => {
    console.log("Renomear arquivo:", file);
  };

  const handleShare = (file) => {
    console.log("Partilhar arquivo:", file);
  };

  return (
    <div className="space-y-8">
      {/* PESQUISA + AÇÕES */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Pesquisa */}
        <div ref={searchRef} className="relative flex-1 max-w-2xl">
          <div
            className="
              flex items-center
              bg-slate-950
              border border-blue-900/40
              rounded-xl
              overflow-hidden
              focus-within:border-cyan-500/50
              transition
            "
          >
            <i className="fas fa-search text-slate-500 ml-4"></i>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Pesquisar arquivos..."
              className="
                w-full
                bg-transparent
                px-3 py-3.5
                text-sm
                text-white
                placeholder:text-slate-500
                outline-none
              "
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="
                  mr-3
                  text-slate-500
                  hover:text-white
                  transition
                "
                aria-label="Limpar pesquisa"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
          </div>

          {/* RESULTADOS DA PESQUISA */}
          {search && (
            <div
              className="
                absolute
                top-full
                left-0
                right-0
                mt-2
                z-30
                bg-slate-950
                border border-blue-900/40
                rounded-xl
                shadow-2xl
                overflow-hidden
              "
            >
              {searchResults.length > 0 ? (
                <div className="p-1.5">
                  {searchResults.map((file) => (
                    <button
                      key={file.id}
                      type="button"
                      onClick={() => handleOpen(file)}
                      className="
                        w-full
                        flex items-center gap-3
                        px-3 py-3
                        rounded-lg
                        text-left
                        hover:bg-slate-900
                        transition
                      "
                    >
                      <FileIcon type={file.type} size="sm" />

                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-white truncate">
                          {file.name}
                        </p>

                        <p className="text-xs text-slate-500 mt-0.5">
                          {file.location}
                        </p>
                      </div>

                      <i className="fas fa-arrow-up-right-from-square text-xs text-slate-600"></i>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-6 text-center">
                  <i className="fas fa-file-circle-question text-slate-600 text-xl"></i>

                  <p className="mt-2 text-sm text-slate-400">
                    Nenhum arquivo encontrado
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* AÇÕES */}
        <div className="flex items-center gap-2">
          {/* Layout */}
          <div
            className="
              flex items-center
              bg-slate-950
              border border-blue-900/40
              rounded-xl
              p-1
            "
          >
            <button
              type="button"
              onClick={() => setLayout("grid")}
              className={`
                w-9 h-9
                rounded-lg
                flex items-center justify-center
                transition
                ${
                  layout === "grid"
                    ? "bg-cyan-500/10 text-cyan-500"
                    : "text-slate-500 hover:text-white"
                }
              `}
              aria-label="Visualização em grelha"
            >
              <i className="fas fa-grid-2"></i>
            </button>

            <button
              type="button"
              onClick={() => setLayout("list")}
              className={`
                w-9 h-9
                rounded-lg
                flex items-center justify-center
                transition
                ${
                  layout === "list"
                    ? "bg-cyan-500/10 text-cyan-500"
                    : "text-slate-500 hover:text-white"
                }
              `}
              aria-label="Visualização em lista"
            >
              <i className="fas fa-list"></i>
            </button>
          </div>

          <Button
            iconLeft="fas fa-plus"
            onClick={() => console.log("Novo arquivo")}
          >
            Novo
          </Button>
        </div>
      </div>

      {/* CABEÇALHO */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Recentes</h2>

          <p className="text-sm text-slate-500 mt-1">
            Os últimos arquivos adicionados ou utilizados.
          </p>
        </div>

        <span className="text-xs text-slate-500">{files.length} arquivos</span>
      </div>

      {/* ARQUIVOS */}
      {files.length === 0 ? (
        <div
          className="
            border border-dashed border-blue-900/40
            rounded-2xl
            py-16
            text-center
          "
        >
          <i className="fas fa-folder-open text-slate-600 text-3xl"></i>

          <p className="mt-4 text-sm text-slate-400">
            Ainda não existem arquivos.
          </p>

          <p className="mt-1 text-xs text-slate-600">
            Comece por adicionar um arquivo ao seu espaço.
          </p>
        </div>
      ) : layout === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {files.map((file) => (
            <FileCard
              key={file.id}
              file={file}
              onContextMenu={handleContextMenu}
              onOpen={handleOpen}
            />
          ))}
        </div>
      ) : (
        <div
          className="
            border border-blue-900/40
            rounded-2xl
            overflow-hidden
            bg-slate-950
          "
        >
          {files.map((file) => (
            <FileListItem
              key={file.id}
              file={file}
              onContextMenu={handleContextMenu}
              onOpen={handleOpen}
            />
          ))}
        </div>
      )}

      {/* MENU CONTEXTUAL */}
      {contextMenu && (
        <FileContextMenu
          file={contextMenu.file}
          position={contextMenu.position}
          onClose={() => setContextMenu(null)}
          onOpen={handleOpen}
          onDownload={handleDownload}
          onRename={handleRename}
          onShare={handleShare}
        />
      )}
    </div>
  );
}

/* CARD — GRELHA */

function FileCard({ file, onContextMenu, onOpen }) {
  return (
    <div
      onContextMenu={(event) => onContextMenu(event, file)}
      onDoubleClick={() => onOpen(file)}
      className="
        group
        relative
        bg-slate-950
        border border-blue-900/40
        rounded-2xl
        p-5
        cursor-pointer
        hover:border-cyan-500/30
        hover:bg-slate-900/70
        transition
      "
    >
      <div className="flex items-start justify-between">
        <FileIcon type={file.type} size="md" />

        <button
          type="button"
          onClick={(event) => onContextMenu(event, file)}
          className="
            w-8 h-8
            flex items-center justify-center
            rounded-lg
            text-slate-600
            hover:text-white
            hover:bg-slate-800
            opacity-0
            group-hover:opacity-100
            transition
          "
          aria-label={`Opções de ${file.name}`}
        >
          <i className="fas fa-ellipsis-vertical"></i>
        </button>
      </div>

      <div className="mt-5 min-w-0">
        <p className="text-sm font-medium text-white truncate">{file.name}</p>

        <p className="mt-1 text-xs text-slate-500 truncate">
          {file.size} · {file.date}
        </p>
      </div>
    </div>
  );
}

/* ITEM — LISTA */

function FileListItem({ file, onContextMenu, onOpen }) {
  return (
    <div
      onContextMenu={(event) => onContextMenu(event, file)}
      onDoubleClick={() => onOpen(file)}
      className="
        group
        flex items-center gap-4
        px-5 py-3
        border-b border-blue-900/30
        last:border-b-0
        hover:bg-slate-900/70
        cursor-pointer
        transition
      "
    >
      <FileIcon type={file.type} size="sm" />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{file.name}</p>
      </div>

      <div className="hidden sm:block w-28 text-xs text-slate-500">
        {file.size}
      </div>

      <div className="hidden md:block w-32 text-xs text-slate-500">
        {file.date}
      </div>

      <button
        type="button"
        onClick={(event) => onContextMenu(event, file)}
        className="
          w-8 h-8
          flex items-center justify-center
          rounded-lg
          text-slate-600
          hover:text-white
          hover:bg-slate-800
          opacity-0
          group-hover:opacity-100
          transition
        "
        aria-label={`Opções de ${file.name}`}
      >
        <i className="fas fa-ellipsis-vertical"></i>
      </button>
    </div>
  );
}
