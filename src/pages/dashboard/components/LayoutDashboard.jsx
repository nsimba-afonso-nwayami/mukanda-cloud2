import { useState } from "react";
import SidebarDashboard from "./SidebarDashboard";
import HeaderDashboard from "./HeaderDashboard";

export default function LayoutDashboard({ children, title }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* SIDEBAR */}
      <SidebarDashboard
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* CONTEÚDO PRINCIPAL */}
      <div className="md:ml-64 min-h-screen flex flex-col">
        {/* HEADER */}
        <HeaderDashboard
          title={title}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* MAIN */}
        <main className="flex-1 mt-20 px-6 py-8 lg:px-8">
          <div className="max-w-7xl mx-auto w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
