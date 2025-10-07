import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme="forest">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
        
        {/* LOGIN FORM */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col animate-fadeInLeft">
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2">
            <MessageCircle className="size-9 text-primary animate-bounce" />
            <span className="text-3xl font-bold font-mono bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent tracking-wider">
              Talkify
            </span>
          </div>

          {error && (
            <div className="alert alert-error mb-4">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Welcome Back 👋</h2>
              <p className="text-sm opacity-70">Sign in to continue your language journey</p>
            </div>

            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="hello@example.com"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm">
                Don’t have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline transition-colors">
                  Create one
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center animate-fadeInRight">
          <div className="max-w-md p-10 text-center space-y-4">
            <img src="/i.png" alt="Language connection illustration" className="w-72 mx-auto animate-float" />
            <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
            <p className="opacity-70">Practice conversations, make friends, and improve your language skills together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
