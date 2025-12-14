import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        ${collapsed ? "w-20" : "w-64"}
        bg-gray-800 text-white min-h-screen
        transition-all duration-300
        flex flex-col
      `}
    >
      {/* Top Toggle Only */}
      <div className="flex items-center justify-end p-4 border-b border-white/10">
        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </button>
      </div>

      {/* Admin Profile */}
      <div className="flex items-center gap-3 p-4 border-b border-white/10">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          <User size={20} />
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 p-3">
        <SidebarItem icon={<LayoutDashboard />} label="Dashboard" collapsed={collapsed} />
        <SidebarItem icon={<Package />} label="Products" collapsed={collapsed} />
        <SidebarItem icon={<ShoppingCart />} label="Orders" collapsed={collapsed} />
        <SidebarItem icon={<Users />} label="Customers" collapsed={collapsed} />
        <SidebarItem icon={<Settings />} label="Settings" collapsed={collapsed} />
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="text-xs text-gray-400 p-4 border-t border-white/10">
          © 2025 Admin Panel
        </div>
      )}
    </aside>
  );
}

function SidebarItem({ icon, label, collapsed }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 cursor-pointer transition">
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
}
