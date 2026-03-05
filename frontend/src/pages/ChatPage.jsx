import { useAuthStore } from "../store/useAuthStore";

export default function ChatPage() {
  const { logout } = useAuthStore();

  return (
    <div className="z-10">
      ChatPage
      <button
        onClick={logout}
        className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Logout
      </button>
    </div>
  );
}
