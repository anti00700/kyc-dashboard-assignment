// app/components/ui/badge.jsx
export function Badge({ children, variant = "outline", className = "" }) {
  const base = "text-xs px-3 py-1 rounded-full";
  const styles =
    variant === "default"
      ? "bg-blue-600 text-white"
      : "bg-gray-100 text-gray-700 border border-gray-200";
  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}
