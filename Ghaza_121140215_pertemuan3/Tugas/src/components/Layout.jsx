import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      {/* NAVBAR */}
      <header className="bg-card border-b border-border shadow-sm">
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/stats"
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              Stats
            </Link>
          </div>
          <span className="text-sm text-muted-foreground hidden sm:block">
            📚 Manage your reading list
          </span>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow w-full max-w-6xl mx-auto p-4">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border text-center py-4 text-sm text-muted-foreground">
        © 2025 Ghaza Muhammad Al Ghifari — All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
