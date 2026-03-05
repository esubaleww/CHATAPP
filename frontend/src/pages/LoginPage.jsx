import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import {
  MailIcon,
  MessageCircleIcon,
  LockIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { login, isLoggingIn } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData);
  };

  return (
    <div className="w-full flex items-center justify-center p-4 bg-slate-900">
      <div className=" relative w-full max-w-6xl md:h-200 h-162.5">
        <BorderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-slate-600/30">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <MessageCircleIcon className="mx-auto mb-4 w-12 h-12 text-slate-400" />
                  <h2 className="text-2xl font-bold text-slate-200 mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-slate-400">
                    Sign in to access your account
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="auth-input-label">
                      Email
                    </label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />
                      <input
                        type="email"
                        id="email"
                        placeholder="john@gmail.com"
                        className="input"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="auth-input-label">
                      Password
                    </label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="input"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="auth-btn"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>
                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden md:w-1/2 p-6 md:flex items-center justify-center md:border-r bg-linear-to-bl from-slate-800/20 to-transparent">
              <div>
                <img
                  src="/login.png"
                  alt="people using mobile devices chatting"
                  className="w-full h-auto object-contain"
                />
                <div className="text-center mt-6">
                  <h3 className="text-xl font-medium text-cyan-400">
                    Connect anytime, anywhere
                  </h3>
                  <div className=" mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free </span>
                    <span className="auth-badge">Easy</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BorderAnimatedContainer>
      </div>
    </div>
  );
}
