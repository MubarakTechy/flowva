import { useState } from "react";
import { supabase } from "../pages/lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    setMessage("");

    // SIGN UP
    if (isSignup) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/hub`,
        },
      });

      if (error) {
        setMessage(error.message);
      } else {
        setMessage(
          "Account created. Please check your email to confirm and continue."
        );
        setIsSignup(false);
        setEmail("");
        setPassword("");
      }

      setLoading(false);
      return;
    }

    // LOGIN
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      navigate("/hub");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT */}
      <div className="hidden md:flex flex-col justify-between p-12 bg-black text-white">
        <h1 className="text-2xl font-semibold">FLOWVA</h1>

        <div className="space-y-4">
          <h2 className="text-4xl font-light">
            Work better.
            <br />
            Stay flowing.
          </h2>
          <p className="text-white/60 max-w-sm">
            A calm workspace built for creators who value focus and meaningful
            output.
          </p>
        </div>

        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Flowva Technologies
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-sm space-y-6">
          <div>
            <h2 className="text-3xl font-semibold">
              {isSignup ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-black/50 text-sm">
              {isSignup
                ? "Start organizing your flow in minutes."
                : "Log in to continue to your hub."}
            </p>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {message && (
            <p
              className={`text-sm p-2 rounded border ${
                message.includes("Account created")
                  ? "text-green-600 bg-green-50 border-green-200"
                  : "text-red-500 bg-red-50 border-red-200"
              }`}
            >
              {message}
            </p>
          )}

          <button
            onClick={handleAuth}
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded disabled:opacity-50"
          >
            {loading
              ? "Please wait…"
              : isSignup
              ? "Create Account"
              : "Login"}
          </button>

          <p className="text-center text-sm">
            {isSignup ? "Already have an account?" : "New to Flowva?"}{" "}
            <button
              onClick={() => {
                setIsSignup(!isSignup);
                setMessage("");
              }}
              className="underline font-medium"
            >
              {isSignup ? "Login" : "Sign up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
