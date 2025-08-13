import "./globals.css";
import Sidebar from "./components/sidebar"; 

export const metadata = {
  title: "KYC Dashboard",
  description: "Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
