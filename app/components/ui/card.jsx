// app/components/ui/card.jsx
export function Card({ className = "", children }) {
  return <div className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children }) {
  return <div className={`px-5 py-4 border-b border-gray-100 ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div className={`px-5 py-4 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-sm font-medium text-gray-900 ${className}`}>{children}</h3>;
}
