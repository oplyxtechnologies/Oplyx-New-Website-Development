"use client";

import { useState } from "react";
import Logsheet from "./logsheet";
import Enquiry from "./enquiry";
import User from "./User"; // ✅ your client component
import {
  FileText,
  Inbox,
  Users,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("logsheet");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "logsheet", label: "Logsheet", icon: <FileText size={20} /> },
    { id: "enquiry", label: "Enquiry", icon: <Inbox size={20} /> },
    { id: "user", label: "User", icon: <Users size={20} /> },
    { id: "reports", label: "Reports", icon: <BarChart2 size={20} /> },
    { id: "settings", label: "Settings", icon: <Settings size={20} /> },
  ];

  const SidebarContent = (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-[#1c1f24] border-r border-[#2a2d31] flex flex-col transition-all duration-300 h-full`}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#2a2d31]">
        {!collapsed && (
          <span className="text-xl font-bold text-white">Oplyx</span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden md:block p-1 rounded hover:bg-[#2a2d31]"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden p-1 rounded hover:bg-[#2a2d31]"
        >
          <X size={20} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              setMobileOpen(false); // close sidebar on mobile tap
            }}
            className={`flex items-center gap-3 w-full px-3 py-3 rounded text-left hover:bg-emerald-600/10 transition ${
              activeTab === item.id
                ? "bg-emerald-600 text-white"
                : "bg-transparent"
            }`}
          >
            {item.icon}
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
    </aside>
  );

  return (
    <div className="flex min-h-screen bg-[#121417] text-gray-200 relative">
      {/* Hamburger toggle on small screens */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#1c1f24] border border-[#2a2d31] rounded"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar desktop */}
      <div className="hidden md:flex">{SidebarContent}</div>

      {/* Sidebar overlay on mobile */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex">
          {SidebarContent}
          <div
            onClick={() => setMobileOpen(false)}
            className="flex-1 bg-black/50"
          />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "logsheet" && <Logsheet />}
        {activeTab === "enquiry" && <Enquiry />}
        {activeTab === "user" && <User />}
        {activeTab === "reports" && (
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Reports</h2>
            <p className="text-gray-400">View and download your log reports.</p>
          </div>
        )}
        {activeTab === "settings" && (
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p className="text-gray-400">
              Configure your portal settings here.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
// This code is a React component for a dashboard layout with a sidebar navigation.
