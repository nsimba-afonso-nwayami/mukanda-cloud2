export default function FormField({
  label,
  name,
  register,
  error,
  type = "text",
  placeholder = "",
  disabled = false,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-xs font-medium text-slate-400 mb-2"
      >
        {label}

        {required && <span className="text-cyan-500 ml-1">*</span>}
      </label>

      <input
        id={name}
        type={type}
        {...(register ? register(name) : {})}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full bg-slate-900 border ${
          error
            ? "border-red-500/50 focus:border-red-500/70"
            : "border-blue-900/40 focus:border-cyan-500/50"
        } rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />

      {error && <p className="mt-1.5 text-xs text-red-400">{error.message}</p>}
    </div>
  );
}
