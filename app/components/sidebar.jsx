// "use client";

// import { useState } from 'react';
// import Link from 'next/link'; // Import the Link component
// import { LayoutDashboard, FileText, CreditCard, File, Bell, Settings } from "lucide-react";

// const menuItems = [
//   { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
//   { icon: FileText, label: "Applications", href: "/applications" },
//   { icon: CreditCard, label: "Billing", href: "/billing" },
//   { icon: File, label: "Rate Card", href: "/rate-card" },
//   { icon: FileText, label: "Agreement Copy", href: "/agreement" },
//   { icon: Settings, label: "Notices", href: "/notices" },
// ];

// export default function Sidebar() {
//   const [activeItem, setActiveItem] = useState(null); // Track active item

//   const handleClick = (label) => {
//     setActiveItem(label);
//   };

//   return (
//     <aside className="hidden md:flex flex-col w-20 bg-white shadow-lg min-h-screen items-center py-4">
//       {/* Logo area */}
//       <div className="mb-6 flex items-center justify-center w-12 h-12 bg-slate-200 rounded">
//         <span className="text-sm font-bold">Logo</span>
//       </div>

//       {/* Menu items */}
//       <nav className="flex flex-col items-center gap-6 mt-4">
//         {menuItems.map((item, idx) => (
//           <Link href={item.href} key={idx} passHref> {/* Use Link for navigation */}
//             <button
//               onClick={() => handleClick(item.label)}
//               className={`flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600 ${
//                 activeItem === item.label ? 'text-blue-700' : '' // Highlight active item
//               }`}
//             >
//               <item.icon size={22} />
//               <span className="text-[10px]">{item.label}</span>
//             </button>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// }


"use client";

import { CreditCard, File, Settings, LayoutDashboard, FileText  } from "lucide-react";

const sidebaritems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FileText, label: "Applications" },
  { icon: CreditCard, label: "Billing" },
  { icon: File, label: "Rate Card" },
  { icon: FileText, label: "Agreement Copy" },
  { icon: Settings, label: "Notices" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-20 bg-white shadow-lg min-h-screen items-center py-4">
      {/* Logo area */}
      <div className="mb-6 flex items-center justify-center w-12 h-12 bg-slate-200 rounded">
        <span className="text-sm font-bold">Logo</span>
      </div>

      {/* Menu items */}
      <nav className="flex flex-col items-center gap-6 mt-4">
        {sidebaritems.map((item, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center gap-1 text-gray-500 hover:text-blue-600`}
          >
            <item.icon size={22} />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}