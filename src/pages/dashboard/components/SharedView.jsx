import { useEffect, useRef, useState } from "react";
import FileIcon from "./FileIcon";
import FileContextMenu from "./FileContextMenu";
import FolderContextMenu from "./FolderContextMenu";

export default function SharedView({ sharedItems = [] }) {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("list");
  const [contextMenu, setContextMenu] = useState(null);

  const searchRef = useRef(null);

  /*
   * Pesquisa
   */
  const filteredItems = sharedItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

  /*
   * Fechar menu contextual
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setContextMenu(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /*
   * Alterar layout
   */
  const handleChangeLayout = (newLayout) => {
    setLayout(newLayout);

    // Futuramente:
    // await userService.updatePreferences({
    //   shared_layout: newLayout,
    // });
  };

  /*
   * Abrir item
   */
  const handleOpen = (item) => {
    setContextMenu(null);

    if (item.itemType === "folder") {
      console.log("Abrir pasta partilhada:", item);
      return;
    }

    console.log("Abrir arquivo partilhado:", item);
  };

  /*
   * Download
   */
  const handleDownload = (item) => {
    setContextMenu(null);
    console.log("Baixar arquivo:", item);
  };

  /*
   * Renomear
   */
  const handleRename = (item) => {
    setContextMenu(null);
    console.log("Renomear:", item);
  };

  /*
   * Partilhar novamente
   */
  const handleShare = (item) => {
    setContextMenu(null);
    console.log("Partilhar novamente:", item);
  };

  /*
   * Mover
   */
  const handleMove = (item) => {
    setContextMenu(null);
    console.log("Mover:", item);
  };

  /*
   * Eliminar / remover partilha
   */
  const handleDelete = (item) => {
    setContextMenu(null);
    console.log("Remover partilha:", item);
  };

  /*
   * Menu contextual
   */
  const handleContextMenu = (event, item) => {
    event.preventDefault();
    event.stopPropagation();

    const isFolder = item.itemType === "folder";

    const menuWidth = 208;
    const menuHeight = isFolder ? 240 : 220;
    const margin = 10;

    let left = event.clientX;
    let top = event.clientY;

    if (left + menuWidth > window.innerWidth) {
      left = window.innerWidth - menuWidth - margin;
    }

    if (top + menuHeight > window.innerHeight) {
      top = window.innerHeight - menuHeight - margin;
    }

    setContextMenu({
      type: item.itemType,
      item,
      position: {
        top: Math.max(margin, top),
        left: Math.max(margin, left),
      },
    });
  };

  /*
   * Menu de ações
   */
  const handleActionMenu = (event, item) => {
    event.preventDefault();
    event.stopPropagation();

    handleContextMenu(event, item);
  };

  return (
    <div className="space-y-8">
      {/* PESQUISA */}
      <div ref={searchRef} className="relative w-full">
        <div
          className="
            flex items-center
            w-full
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
            placeholder="Pesquisar nos itens partilhados..."
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

        {/* RESULTADOS */}
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
            {filteredItems.length > 0 ? (
              <div className="p-1.5">
                {filteredItems.slice(0, 5).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleOpen(item)}
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
                    <FileIcon
                      type={item.itemType === "folder" ? "folder" : item.type}
                      size="sm"
                    />

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-white truncate">{item.name}</p>

                      <p className="text-xs text-slate-500 mt-0.5 truncate">
                        Partilhado por {item.sharedBy}
                      </p>
                    </div>

                    <i
                      className={`fas ${
                        item.itemType === "folder"
                          ? "fa-folder-open"
                          : "fa-arrow-up-right-from-square"
                      } text-xs text-slate-600`}
                    ></i>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center">
                <i className="fas fa-share-nodes text-slate-600 text-xl"></i>

                <p className="mt-2 text-sm text-slate-400">
                  Nenhum resultado encontrado
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* AÇÕES */}
      <div className="flex items-center justify-between gap-4">
        {/* LAYOUT */}
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
            onClick={() => handleChangeLayout("grid")}
            className={`
              w-9 h-9
              rounded-lg
              flex items-center justify-center
              transition
              cursor-pointer
              ${
                layout === "grid"
                  ? "bg-cyan-500/10 text-cyan-500"
                  : "text-slate-500 hover:text-white"
              }
            `}
            aria-label="Visualização em grelha"
            aria-pressed={layout === "grid"}
          >
            <i className="fas fa-th-large"></i>
          </button>

          <button
            type="button"
            onClick={() => handleChangeLayout("list")}
            className={`
              w-9 h-9
              rounded-lg
              flex items-center justify-center
              transition
              cursor-pointer
              ${
                layout === "list"
                  ? "bg-cyan-500/10 text-cyan-500"
                  : "text-slate-500 hover:text-white"
              }
            `}
            aria-label="Visualização em lista"
            aria-pressed={layout === "list"}
          >
            <i className="fas fa-list"></i>
          </button>
        </div>
      </div>

      {/* CABEÇALHO */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Itens partilhados
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Arquivos e pastas que foram partilhados consigo.
          </p>
        </div>

        <span className="text-xs text-slate-500 shrink-0">
          {filteredItems.length} {filteredItems.length === 1 ? "item" : "itens"}
        </span>
      </div>

      {/* CONTEÚDO */}
      {filteredItems.length === 0 ? (
        <div
          className="
            border border-dashed border-blue-900/40
            rounded-2xl
            py-16
            text-center
          "
        >
          <div
            className="
              w-14 h-14
              mx-auto
              rounded-2xl
              bg-cyan-500/10
              text-cyan-500
              flex items-center justify-center
            "
          >
            <i className="fas fa-share-nodes text-xl"></i>
          </div>

          <p className="mt-4 text-sm text-slate-400">Nenhum item partilhado.</p>

          <p className="mt-1 text-xs text-slate-600">
            Os arquivos e pastas partilhados consigo aparecerão aqui.
          </p>
        </div>
      ) : layout === "grid" ? (
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-4
          "
        >
          {filteredItems.map((item) => (
            <SharedCard
              key={item.id}
              item={item}
              onOpen={handleOpen}
              onContextMenu={handleContextMenu}
              onActionMenu={handleActionMenu}
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
          {filteredItems.map((item) => (
            <SharedListItem
              key={item.id}
              item={item}
              onOpen={handleOpen}
              onContextMenu={handleContextMenu}
              onActionMenu={handleActionMenu}
            />
          ))}
        </div>
      )}

      {/* MENU DA PASTA */}
      {contextMenu?.type === "folder" && (
        <FolderContextMenu
          folder={contextMenu.item}
          position={contextMenu.position}
          onClose={() => setContextMenu(null)}
          onOpen={handleOpen}
          onRename={handleRename}
          onShare={handleShare}
          onMove={handleMove}
          onDelete={handleDelete}
        />
      )}

      {/* MENU DO ARQUIVO */}
      {contextMenu?.type === "file" && (
        <FileContextMenu
          file={contextMenu.item}
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

/* =========================================================
   PARTILHADO — GRELHA
========================================================= */

function SharedCard({ item, onOpen, onContextMenu, onActionMenu }) {
  const isFolder = item.itemType === "folder";

  return (
    <div
      onContextMenu={(event) => onContextMenu(event, item)}
      onDoubleClick={() => onOpen(item)}
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
        <FileIcon type={isFolder ? "folder" : item.type} size="md" />

        <button
          type="button"
          onClick={(event) => onActionMenu(event, item)}
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
          aria-label={`Opções de ${item.name}`}
        >
          <i className="fas fa-ellipsis-vertical"></i>
        </button>
      </div>

      <div className="mt-5 min-w-0">
        <p className="text-sm font-medium text-white truncate">{item.name}</p>

        <p className="mt-1 text-xs text-slate-500 truncate">
          {isFolder ? "Pasta" : item.size}
        </p>

        <p className="mt-2 text-xs text-slate-600 truncate">
          Partilhado por {item.sharedBy}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PARTILHADO — LISTA
========================================================= */

function SharedListItem({ item, onOpen, onContextMenu, onActionMenu }) {
  const isFolder = item.itemType === "folder";

  return (
    <div
      onContextMenu={(event) => onContextMenu(event, item)}
      onDoubleClick={() => onOpen(item)}
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
      <FileIcon type={isFolder ? "folder" : item.type} size="sm" />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{item.name}</p>

        <p className="text-xs text-slate-600 mt-1 truncate">{item.location}</p>
      </div>

      <div className="hidden sm:block w-36 text-xs text-slate-500 truncate">
        {item.sharedBy}
      </div>

      <div className="hidden md:block w-32 text-xs text-slate-500">
        {item.sharedAt}
      </div>

      <div className="hidden lg:block w-24 text-xs text-slate-500">
        {isFolder ? "Pasta" : item.size}
      </div>

      <button
        type="button"
        onClick={(event) => onActionMenu(event, item)}
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
        aria-label={`Opções de ${item.name}`}
      >
        <i className="fas fa-ellipsis-vertical"></i>
      </button>
    </div>
  );
}
