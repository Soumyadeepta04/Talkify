import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup } from "../lib/api";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({ FullName: "", email: "", password: "" });
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signupMutation, isPending, error } = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authuser"] });
      navigate("/");
    },
  });

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8" data-theme="forest">
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-2xl shadow-xl overflow-hidden transition-all duration-500">
        
        {/* SIGNUP FORM */}
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

          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold">Create an Account 🚀</h2>
              <p className="text-sm opacity-70">Join Talkify and start your language learning journey!</p>
            </div>

            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                value={signupData.FullName}
                onChange={(e) => setSignupData({ ...signupData, FullName: e.target.value })}
                required
              />
            </div>

            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                required
              />
            </div>

            <div className="form-control space-y-2">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="********"
                className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                required
              />
              <p className="text-xs opacity-70">Password must be at least 6 characters long</p>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-sm" required />
                <span className="text-xs">
                  I agree to the{" "}
                  <span className="text-primary hover:underline">terms of service</span> and{" "}
                  <span className="text-primary hover:underline">privacy policy</span>
                </span>
              </label>
            </div>

            <button className="btn btn-primary w-full" type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Creating...
                </>
              ) : (
                "Create Account"
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline transition-colors">
                  Sign in
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
            <p className="opacity-70">Practice conversations, make friends, and improve your skills together.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

                                


