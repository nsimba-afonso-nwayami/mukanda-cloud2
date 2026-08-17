import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Button({
  children,

  // Navegação
  to,
  href,

  // Tipo de botão
  type = "button",

  // Estados
  disabled = false,
  loading = false,
  loadingText = "A processar...",

  // Aparência
  variant = "primary",
  fullWidth = false,

  // Ícones
  iconLeft,
  iconRight,

  // Eventos
  onClick,

  className = "",
  ...props
}) {
  const isDisabled = disabled || loading;

  const baseClasses =
    "inline-flex items-center justify-center text-center gap-2 cursor-pointer px-5 py-3 rounded-lg text-sm font-semibold transition";

  const widthClasses = fullWidth ? "w-full" : "";

  const variantClasses = {
    primary: "bg-cyan-500 text-slate-950 hover:bg-cyan-400",

    secondary:
      "border border-blue-700 text-white hover:border-cyan-500 hover:text-cyan-500",

    outline:
      "border border-white/10 text-slate-300 hover:border-cyan-500 hover:text-cyan-500",

    ghost: "text-slate-400 hover:text-cyan-500",
  };

  const stateClasses = isDisabled
    ? "opacity-60 cursor-not-allowed pointer-events-none"
    : "";

  const classes = `
    ${baseClasses}
    ${widthClasses}
    ${variantClasses[variant]}
    ${stateClasses}
    ${className}
  `.trim();

  const content = (
    <>
      {loading ? (
        <>
          <i className="fas fa-spinner fa-spin text-xs"></i>
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {iconLeft &&
            (typeof iconLeft === "string" ? (
              <i className={`${iconLeft} text-xs`}></i>
            ) : (
              iconLeft
            ))}

          <span>{children}</span>

          {iconRight &&
            (typeof iconRight === "string" ? (
              <i className={`${iconRight} text-xs`}></i>
            ) : (
              iconRight
            ))}
        </>
      )}
    </>
  );

  /*
   * HashLink
   * Exemplo:
   * to="/#como-funciona"
   */
  if (to?.includes("#")) {
    return (
      <HashLink
        to={to}
        className={classes}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={(event) => {
          if (isDisabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
        {...props}
      >
        {content}
      </HashLink>
    );
  }

  /*
   * Link normal
   */
  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={(event) => {
          if (isDisabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
        {...props}
      >
        {content}
      </Link>
    );
  }

  /*
   * Link externo / HTML
   */
  if (href) {
    return (
      <a
        href={isDisabled ? undefined : href}
        className={classes}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
        onClick={(event) => {
          if (isDisabled) {
            event.preventDefault();
            return;
          }

          onClick?.(event);
        }}
        {...props}
      >
        {content}
      </a>
    );
  }

  /*
   * Button
   */
  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
}
