"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  FileText,
  Info,
  Compass,
  Sunrise,
  ArrowLeft,
} from "lucide-react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import "./Layout.css";

const navItems = [
  { path: "/mateo", label: "Introducción", icon: <Info size={20} /> },
  {
    path: "/mateo/estructura",
    label: "Estructura",
    icon: <BookOpen size={20} />,
  },
  {
    path: "/mateo/capitulos",
    label: "Capítulos",
    icon: <FileText size={20} />,
  },
  {
    path: "/mateo/temas",
    label: "Temas Principales",
    icon: <Compass size={20} />,
  },
  {
    path: "/mateo/pasajes",
    label: "Pasajes Clave",
    icon: <Sunrise size={20} />,
  },
  {
    path: "/mateo/teologia",
    label: "Enfoque Teológico",
    icon: <Info size={20} />,
  },
  {
    path: "/mateo/historia",
    label: "Contexto Histórico",
    icon: <BookOpen size={20} />,
  },
  { path: "/mateo/conclusion", label: "Conclusión", icon: <Info size={20} /> },
];

export function LayoutMateo({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="app-container">
      {/* Navbar Mobile/Header */}
      <header className="navbar glass-panel">
        <div className="navbar-content container">
          <button
            className="menu-btn"
            onClick={toggleSidebar}
            aria-label="Toggle Menu"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="logo">
            <Link href="/mateo">
              <h1>El Evangelio de Mateo</h1>
            </Link>
          </div>
          <Link href="/diccionario" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", color: "var(--color-accent)", fontWeight: "600" }}>
            <BookOpen size={20} />
            <span className="hide-mobile-text">Diccionario</span>
          </Link>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <nav className="sidebar-nav">
            <Link
              href="/"
              className="nav-item"
              style={{
                borderBottom: "1px solid var(--color-border)",
                marginBottom: "0.5rem",
                paddingBottom: "1rem",
                color: "var(--color-dark)",
              }}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="nav-icon">
                <ArrowLeft size={20} />
              </span>
              <span className="nav-label">Volver a La Santa Biblia</span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-item ${pathname === item.path || (item.path === "/mateo/capitulos" && pathname.startsWith("/mateo/capitulos")) ? "active" : ""}`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Overlay for mobile sidebar */}
        {sidebarOpen && (
          <div className="sidebar-overlay" onClick={toggleSidebar}></div>
        )}

        {/* Main Content */}
        <main className="main-content container animate-fade-in">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Un estudio profundo sobre el Evangelio de Mateo.</p>
        </div>
      </footer>
    </div>
  );
}
