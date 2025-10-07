import React from "react";
import useAuthuser from "../hooks/useAuthUser";
import { useLocation, Link } from "react-router-dom";

import { Bell, LogOut, MessageCircle } from "lucide-react";
import ThemeSelector from "./ThemeSelector.jsx";
import useLogout from "../hooks/useLogout.js";

const Navbar = () => {
  const { authUser } = useAuthuser();
  const location = useLocation();
  const isChatPage = location.pathname?.startsWith("/chat");

  const { logoutMutation, isLoading, error } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-40 h-16 flex items-center shadow-md backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        {isChatPage && (
          <Link
            to="/"
            className="flex items-center gap-3 animate-bounce hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="h-9 w-9 text-gradient-to-r from-primary to-secondary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Talkify
            </span>
          </Link>
        )}

        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Link to="/notifications">
            <button className="btn btn-ghost btn-circle relative group hover:bg-primary/10 transition-all duration-300">
              <Bell className="h-6 w-6 text-base-content opacity-70 group-hover:scale-110 transition-transform duration-300" />
              {/* Notification badge */}
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            </button>
          </Link>

          {/* Theme selector */}
          <ThemeSelector />

          {/* Avatar with hover effect */}
          <div className="avatar relative group">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary ring-offset-base-200 ring-offset-2 transition-all duration-300 transform hover:scale-110">
              <img src={authUser?.profilepic} alt="User Avatar" />
            </div>
            {/* Optional dropdown */}
            <div className="absolute right-0 mt-12 hidden group-hover:block bg-base-300 rounded-lg shadow-lg p-2 w-32 text-center z-50 animate-fadeIn">
              <button
                className="btn btn-sm btn-ghost w-full flex items-center justify-center gap-2"
                onClick={() => logoutMutation()}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  <>
                    <LogOut className="h-4 w-4" />
                    Logout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="absolute top-16 right-4 alert alert-error shadow-md">
            <span>{error?.response?.data?.message || error?.message || "Logout failed"}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
