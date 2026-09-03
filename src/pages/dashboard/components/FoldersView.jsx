import { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import FileIcon from "./FileIcon";
import FileContextMenu from "./FileContextMenu";
import FolderContextMenu from "./FolderContextMenu";

export default function FoldersView({
  folders = [],
  files = [],
  onCreateFolder,
  onUpload,
}) {
  const [search, setSearch] = useState("");
  const [layout, setLayout] = useState("list");
  const [currentFolderId, setCurrentFolderId] = useState(null);

  const [contextMenu, setContextMenu] = useState(null);

  const searchRef = useRef(null);

  /*
   * Pasta atual
   */
  const currentFolder = folders.find((folder) => folder.id === currentFolderId);

  /*
   * Pastas exibidas na pasta atual
   */
  const currentFolders = folders.filter(
    (folder) => folder.parentId === currentFolderId,
  );

  /*
   * Arquivos da pasta atual
   */
  const currentFiles = files.filter(
    (file) => file.folderId === currentFolderId,
  );

  /*
   * Pesquisa global.
   *
   * A pesquisa procura tanto por pastas como por arquivos.
   */
  const filteredFolders = folders.filter((folder) =>
    folder.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filteredFiles = files.filter((file) =>
    file.name.toLowerCase().includes(search.toLowerCase()),
  );

  const searchResultsFolders = search ? filteredFolders.slice(0, 5) : [];
  const searchResultsFiles = search ? filteredFiles.slice(0, 5) : [];

  /*
   * Fechar menu contextual com ESC
   * e quando clicar fora.
   */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setContextMenu(null);
      }
    };

    const handleClickOutside = () => {
      setContextMenu(null);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  /*
   * Alterar layout
   */
  const handleChangeLayout = (newLayout) => {
    setLayout(newLayout);

    // Futuramente:
    // await userService.updatePreferences({
    //   file_layout: newLayout,
    // });
  };

  /*
   * Abrir pasta
   */
  const handleOpenFolder = (folder) => {
    setContextMenu(null);
    setSearch("");
    setCurrentFolderId(folder.id);
  };

  /*
   * Voltar para a pasta anterior
   */
  const handleBack = () => {
    if (!currentFolder) return;

    setContextMenu(null);
    setSearch("");
    setCurrentFolderId(currentFolder.parentId ?? null);
  };

  /*
   * Voltar para a raiz
   */
  const handleGoToRoot = () => {
    setContextMenu(null);
    setSearch("");
    setCurrentFolderId(null);
  };

  /*
   * Menu contextual
   */
  const handleContextMenu = (event, item, type) => {
    event.preventDefault();
    event.stopPropagation();

    const menuWidth = 208;
    const menuHeight = type === "folder" ? 240 : 220;
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
      type,
      item,
      position: {
        top: Math.max(margin, top),
        left: Math.max(margin, left),
      },
    });
  };

  /*
   * Abrir arquivo
   */
  const handleOpenFile = (file) => {
    setContextMenu(null);
    console.log("Abrir arquivo:", file);
  };

  /*
   * Download
   */
  const handleDownload = (file) => {
    setContextMenu(null);
    console.log("Baixar arquivo:", file);
  };

  /*
   * Renomear arquivo
   */
  const handleRenameFile = (file) => {
    setContextMenu(null);
    console.log("Renomear arquivo:", file);
  };

  /*
   * Partilhar arquivo
   */
  const handleShareFile = (file) => {
    setContextMenu(null);
    console.log("Partilhar arquivo:", file);
  };

  /*
   * Renomear pasta
   */
  const handleRenameFolder = (folder) => {
    setContextMenu(null);
    console.log("Renomear pasta:", folder);
  };

  /*
   * Partilhar pasta
   */
  const handleShareFolder = (folder) => {
    setContextMenu(null);
    console.log("Partilhar pasta:", folder);
  };

  /*
   * Mover pasta
   */
  const handleMoveFolder = (folder) => {
    setContextMenu(null);
    console.log("Mover pasta:", folder);
  };

  /*
   * Eliminar pasta
   */
  const handleDeleteFolder = (folder) => {
    setContextMenu(null);
    console.log("Eliminar pasta:", folder);
  };

  /*
   * Breadcrumb
   */
  const breadcrumb = [];

  let folder = currentFolder;

  while (folder) {
    breadcrumb.unshift(folder);

    folder = folders.find((item) => item.id === folder.parentId);
  }

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
            placeholder="Pesquisar pastas e arquivos..."
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
            {searchResultsFolders.length > 0 ||
            searchResultsFiles.length > 0 ? (
              <div className="p-1.5">
                {searchResultsFolders.map((folder) => (
                  <button
                    key={`folder-${folder.id}`}
                    type="button"
                    onClick={() => handleOpenFolder(folder)}
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
                    <FileIcon type="folder" size="sm" />

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-white truncate">
                        {folder.name}
                      </p>

                      <p className="text-xs text-slate-500 mt-0.5">Pasta</p>
                    </div>

                    <i className="fas fa-folder-open text-xs text-slate-600"></i>
                  </button>
                ))}

                {searchResultsFiles.map((file) => (
                  <button
                    key={`file-${file.id}`}
                    type="button"
                    onClick={() => handleOpenFile(file)}
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
                      <p className="text-sm text-white truncate">{file.name}</p>

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
                <i className="fas fa-folder-open text-slate-600 text-xl"></i>

                <p className="mt-2 text-sm text-slate-400">
                  Nenhum resultado encontrado
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* AÇÕES */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* LAYOUT */}
        <div
          className="
            flex items-center
            bg-slate-950
            border border-blue-900/40
            rounded-xl
            p-1
            w-fit
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

        {/* AÇÕES */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button
            variant="secondary"
            iconLeft="fas fa-folder-plus"
            onClick={onCreateFolder}
            className="flex-1 sm:flex-none"
          >
            Nova pasta
          </Button>

          <Button
            iconLeft="fas fa-upload"
            onClick={onUpload}
            className="flex-1 sm:flex-none"
          >
            Upload
          </Button>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div
        className="
          flex items-center gap-2
          min-w-0
          text-sm
          overflow-x-auto
        "
      >
        <button
          type="button"
          onClick={handleGoToRoot}
          className={`
            shrink-0
            flex items-center gap-2
            transition
            ${
              currentFolderId === null
                ? "text-cyan-500"
                : "text-slate-500 hover:text-white"
            }
          `}
        >
          <i className="fas fa-home text-xs"></i>
          <span>Meu espaço</span>
        </button>

        {breadcrumb.map((folder) => (
          <div key={folder.id} className="flex items-center gap-2 shrink-0">
            <i className="fas fa-chevron-right text-[10px] text-slate-700"></i>

            <button
              type="button"
              onClick={() => {
                setContextMenu(null);
                setSearch("");
                setCurrentFolderId(folder.id);
              }}
              className={`
                transition
                ${
                  folder.id === currentFolderId
                    ? "text-cyan-500"
                    : "text-slate-500 hover:text-white"
                }
              `}
            >
              {folder.name}
            </button>
          </div>
        ))}
      </div>

      {/* CABEÇALHO */}
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            {currentFolderId !== null && (
              <button
                type="button"
                onClick={handleBack}
                className="
                  w-9 h-9
                  shrink-0
                  rounded-lg
                  flex items-center justify-center
                  text-slate-500
                  hover:text-white
                  hover:bg-slate-900
                  transition
                "
                aria-label="Voltar"
              >
                <i className="fas fa-arrow-left text-sm"></i>
              </button>
            )}

            <div>
              <h2 className="text-lg font-semibold text-white">
                {currentFolder?.name || "Meu espaço"}
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                {currentFolderId === null
                  ? "As suas pastas e arquivos."
                  : "Conteúdo desta pasta."}
              </p>
            </div>
          </div>
        </div>

        <span className="text-xs text-slate-500 shrink-0">
          {currentFolders.length + currentFiles.length} itens
        </span>
      </div>

      {/* CONTEÚDO VAZIO */}
      {currentFolders.length === 0 && currentFiles.length === 0 ? (
        <div
          className="
            border border-dashed border-blue-900/40
            rounded-2xl
            py-16
            text-center
          "
        >
          <i className="fas fa-folder-open text-slate-600 text-3xl"></i>

          <p className="mt-4 text-sm text-slate-400">Esta pasta está vazia.</p>

          <p className="mt-1 text-xs text-slate-600">
            Crie uma pasta ou faça upload de um arquivo.
          </p>
        </div>
      ) : layout === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentFolders.map((folder) => (
            <FolderCard
              key={`folder-${folder.id}`}
              folder={folder}
              onOpen={handleOpenFolder}
              onContextMenu={handleContextMenu}
            />
          ))}

          {currentFiles.map((file) => (
            <FileCard
              key={`file-${file.id}`}
              file={file}
              onOpen={handleOpenFile}
              onContextMenu={handleContextMenu}
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
          {currentFolders.map((folder) => (
            <FolderListItem
              key={`folder-${folder.id}`}
              folder={folder}
              onOpen={handleOpenFolder}
              onContextMenu={handleContextMenu}
            />
          ))}

          {currentFiles.map((file) => (
            <FileListItem
              key={`file-${file.id}`}
              file={file}
              onOpen={handleOpenFile}
              onContextMenu={handleContextMenu}
            />
          ))}
        </div>
      )}

      {/* MENU CONTEXTUAL DA PASTA */}
      {contextMenu?.type === "folder" && (
        <FolderContextMenu
          folder={contextMenu.item}
          position={contextMenu.position}
          onClose={() => setContextMenu(null)}
          onOpen={handleOpenFolder}
          onRename={handleRenameFolder}
          onShare={handleShareFolder}
          onMove={handleMoveFolder}
          onDelete={handleDeleteFolder}
        />
      )}

      {/* MENU CONTEXTUAL DO ARQUIVO */}
      {contextMenu?.type === "file" && (
        <FileContextMenu
          file={contextMenu.item}
          position={contextMenu.position}
          onClose={() => setContextMenu(null)}
          onOpen={handleOpenFile}
          onDownload={handleDownload}
          onRename={handleRenameFile}
          onShare={handleShareFile}
        />
      )}
    </div>
  );
}

/* =========================================================
   PASTA — GRELHA
========================================================= */

function FolderCard({ folder, onOpen, onContextMenu }) {
  return (
    <div
      onContextMenu={(event) => onContextMenu(event, folder, "folder")}
      onDoubleClick={() => onOpen(folder)}
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
        <FileIcon type="folder" size="md" />

        <button
          type="button"
          onClick={(event) => onContextMenu(event, folder, "folder")}
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
          aria-label={`Opções de ${folder.name}`}
        >
          <i className="fas fa-ellipsis-vertical"></i>
        </button>
      </div>

      <div className="mt-5 min-w-0">
        <p className="text-sm font-medium text-white truncate">{folder.name}</p>

        <p className="mt-1 text-xs text-slate-500 truncate">
          Pasta · {folder.date}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PASTA — LISTA
========================================================= */

function FolderListItem({ folder, onOpen, onContextMenu }) {
  return (
    <div
      onContextMenu={(event) => onContextMenu(event, folder, "folder")}
      onDoubleClick={() => onOpen(folder)}
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
      <FileIcon type="folder" size="sm" />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-white truncate">{folder.name}</p>
      </div>

      <div className="hidden sm:block w-28 text-xs text-slate-500">Pasta</div>

      <div className="hidden md:block w-32 text-xs text-slate-500">
        {folder.date}
      </div>

      <button
        type="button"
        onClick={(event) => onContextMenu(event, folder, "folder")}
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
        aria-label={`Opções de ${folder.name}`}
      >
        <i className="fas fa-ellipsis-vertical"></i>
      </button>
    </div>
  );
}

/* =========================================================
   ARQUIVO — GRELHA
========================================================= */

function FileCard({ file, onOpen, onContextMenu }) {
  return (
    <div
      onContextMenu={(event) => onContextMenu(event, file, "file")}
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
          onClick={(event) => onContextMenu(event, file, "file")}
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

/* =========================================================
   ARQUIVO — LISTA
========================================================= */

function FileListItem({ file, onOpen, onContextMenu }) {
  return (
    <div
      onContextMenu={(event) => onContextMenu(event, file, "file")}
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
        onClick={(event) => onContextMenu(event, file, "file")}
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
