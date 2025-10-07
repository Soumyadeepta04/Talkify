import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useAuthuser from "../hooks/useAuthUser";
import { Bell, Home, Users, MessageCircle, Menu, X } from "lucide-react";

const Sidebar = () => {
  const { authUser } = useAuthuser();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/friends", label: "Friends", icon: Users },
    { to: "/notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <>
      {/* MOBILE HEADER */}
      <div className="lg:hidden flex items-center justify-between bg-base-100 border-b border-base-300 p-3 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <MessageCircle size={28} className="text-primary" />
          <span className="text-xl font-bold font-mono">Talkify</span>
        </Link>
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="btn btn-ghost btn-sm"
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* DESKTOP SIDEBAR */}
      <aside
        className={`${
          isCollapsed ? "w-20" : "w-64"
        } bg-base-200 border-r border-base-300 flex-col h-screen sticky top-0 hidden lg:flex transition-all duration-300 overflow-y-auto`}
      >
        {/* LOGO */}
        <div className="p-5 border-b border-base-300 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <MessageCircle size={32} className="text-primary" />
            {!isCollapsed && (
              <span className="text-2xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Talkify
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="btn btn-ghost btn-xs"
          >
            {isCollapsed ? "→" : "←"}
          </button>
        </div>

        {/* NAV LINKS */}
        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case transition ${
                  currentPath === link.to ? "btn-active" : ""
                }`}
                title={isCollapsed ? link.label : ""}
              >
                <IconComponent size={20} className="text-base-content opacity-70" />
                {!isCollapsed && <span>{link.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* USER PROFILE */}
        <div className="p-4 border-t border-base-300 mt-auto">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={authUser?.profilepic} alt="User Avatar" />
              </div>
            </div>
            {!isCollapsed && (
              <div className="flex-1">
                <p className="font-semibold text-sm">{authUser?.fullName}</p>
                <p className="text-xs text-success flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-success inline-block" />
                  Online
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* MOBILE DRAWER */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 max-w-full bg-base-200 h-full shadow-xl p-4 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <Link to="/" className="flex items-center gap-2">
                <MessageCircle size={32} className="text-primary" />
                <span className="text-2xl font-bold font-mono">Talkify</span>
              </Link>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="btn btn-ghost btn-sm"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex-1 space-y-2">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileOpen(false)}
                    className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${
                      currentPath === link.to ? "btn-active" : ""
                    }`}
                  >
                    <IconComponent size={20} className="text-base-content opacity-70" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto border-t border-base-300 pt-4">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={authUser?.profilepic} alt="User Avatar" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm">{authUser?.fullName}</p>
                  <p className="text-xs text-success flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-success inline-block" />
                    Online
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BACKDROP */}
          <div
            onClick={() => setIsMobileOpen(false)}
            className="flex-1 bg-black/40"
          />
        </div>
      )}
    </>
  );
};

export default Sidebar;
