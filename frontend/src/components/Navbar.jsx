import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import useLogout from "../hooks/useLogout";
import ThemeSelector from "./ThemeSelector";
import { Bell, LogOut, MessageCircle } from "lucide-react";

const Navbar = () => {
  const { authUser } = useAuthUser();
  const location = useLocation();
  const navigate = useNavigate();
  const isChatPage = location.pathname?.startsWith("/chat");
  const { logoutMutation, isLoading, error } = useLogout();

  return (
    <nav className="bg-base-200 border-b border-base-300 sticky top-0 z-40 h-16 flex items-center shadow-md backdrop-blur-md">
      {/* Changed flex justify-between to just flex */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        {/* Logo */}
        {isChatPage && (
          <Link
            to="/"
            className="flex items-center gap-2.5 animate-bounce hover:scale-105 transition-transform duration-300"
          >
            <MessageCircle className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              Talkify
            </span>
          </Link>
        )}

        {/* Right icons - Added ml-auto to push this group to the right */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Notifications */}
          <Link to="/notifications">
            <button className="btn btn-ghost btn-circle relative group hover:bg-primary/10 transition-all duration-300">
              <Bell className="h-6 w-6 text-base-content opacity-70 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            </button>
          </Link>

          {/* Theme selector */}
          <ThemeSelector />

          {/* User profile - This now correctly navigates to /profile */}
          <div className="avatar cursor-pointer" onClick={() => navigate("/profile")}>
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary ring-offset-base-200 ring-offset-2 transition-transform duration-300 transform hover:scale-110">
              <img src={authUser?.profilepic || "/default-avatar.png"} alt="User Avatar" />
            </div>
          </div>

          {/* Logout */}
          <button
            className="btn btn-ghost btn-circle"
            onClick={logoutMutation}
            disabled={isLoading}
            title="Logout"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <LogOut className="h-6 w-6 text-base-content opacity-70" />
            )}
          </button>
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