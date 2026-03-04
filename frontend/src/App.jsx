import { Routes, Route } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
function App() {
  const { authUser, isLoading, login } = useAuthStore();
  console.log("Auth User:", authUser);
  console.log("Is Loading:", isLoading);
  return (
    <div className="min-h-screen bg-slate-900 relative flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right, #4f4f4f2e_1px)] bg-size-[14px_24px]" />
      <div className="absolute top-0 -left-16 w-96 h-96 bg-emerald-500 opacity-30 rounded-full blur-[120px] transform rotate-12" />
      <div className="absolute bottom-0 -right-16 w-96 h-96 bg-cyan-500 opacity-30 rounded-full blur-[120px] transform -rotate-12" />
      <div className="absolute top-1/2 left-1/2 w-125 h-125 bg-gray-400 opacity-20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
