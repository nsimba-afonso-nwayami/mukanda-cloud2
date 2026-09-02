export default function FileIcon({ type, size = "md" }) {
  const icons = {
    folder: {
      icon: "fas fa-folder",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },

    pdf: {
      icon: "fas fa-file-pdf",
      color: "text-red-400",
      bg: "bg-red-500/10",
    },

    image: {
      icon: "fas fa-file-image",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },

    word: {
      icon: "fas fa-file-word",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },

    excel: {
      icon: "fas fa-file-excel",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },

    powerpoint: {
      icon: "fas fa-file-powerpoint",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
    },

    default: {
      icon: "fas fa-file",
      color: "text-slate-400",
      bg: "bg-slate-800",
    },
  };

  const config = icons[type] || icons.default;

  const sizeClasses = {
    sm: "w-9 h-9 text-sm",
    md: "w-11 h-11 text-lg",
    lg: "w-14 h-14 text-2xl",
  };

  return (
    <div
      className={`
        ${sizeClasses[size]}
        ${config.bg}
        ${config.color}
        rounded-xl
        flex items-center justify-center
        shrink-0
      `}
    >
      <i className={config.icon}></i>
    </div>
  );
}
