import { useState, useRef, useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatList from "../components/ChatList";
import ContactList from "../components/ContactList";
import ChatWindow from "../components/ChatWindow";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";
import { Menu, MessageCircle, Users } from "lucide-react";

export default function ChatPage() {
  const { activeTab, selectedUser, setActiveTab } = useChatStore();
  const [isExpanded, setIsExpanded] = useState(true);
  const [leftWidth, setLeftWidth] = useState(280);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);

  const handleChatSelect = () => {
    setIsExpanded(false);
  };

  const handleIconClick = (tab) => {
    setActiveTab(tab);
    setIsExpanded(true);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const newWidth = e.clientX - containerRect.left;

    const minWidth = 65;
    const maxWidth = 400;

    if (newWidth >= minWidth && newWidth <= maxWidth) {
      setLeftWidth(newWidth);

      if (newWidth <= 70 && isExpanded) {
        setIsExpanded(false);
      } else if (newWidth > 70 && !isExpanded) {
        setIsExpanded(true);
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  return (
    <div className="h-[calc(100vh-2rem)] w-full flex items-center justify-center p-4 md:p-6">
      <BorderAnimatedContainer>
        <div ref={containerRef} className="flex h-full w-full relative">
          <div
            ref={leftPanelRef}
            style={{ width: isExpanded ? leftWidth : 64 }}
            className={`
              bg-slate-800/50 backdrop-blur-sm flex flex-col h-full
              transition-[width] duration-300 ease-in-out
              relative
            `}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-3 hover:bg-slate-700/50 self-start"
            >
              <Menu size={20} className="text-white" />
            </button>

            {!isExpanded && (
              <div className="flex flex-col items-center space-y-6 mt-4">
                <button
                  onClick={() => handleIconClick("chats")}
                  className={`p-2 hover:bg-slate-700/50 rounded-lg ${activeTab === "chats" ? "bg-slate-700/50" : ""}`}
                >
                  <MessageCircle
                    size={20}
                    className={`${activeTab === "chats" ? "text-indigo-400" : "text-white"} hover:text-indigo-400`}
                  />
                </button>
                <button
                  onClick={() => handleIconClick("contacts")}
                  className={`p-2 hover:bg-slate-700/50 rounded-lg ${activeTab === "contacts" ? "bg-slate-700/50" : ""}`}
                >
                  <Users
                    size={20}
                    className={`${activeTab === "contacts" ? "text-indigo-400" : "text-white"} hover:text-indigo-400`}
                  />
                </button>
              </div>
            )}

            {isExpanded && (
              <>
                <ProfileHeader />
                <ActiveTabSwitch />
                <div
                  className="flex-1 overflow-y-auto p-4 space-y-2"
                  onClick={handleChatSelect}
                >
                  {activeTab === "chats" ? <ChatList /> : <ContactList />}
                </div>
              </>
            )}

            {isExpanded && (
              <div
                onMouseDown={handleMouseDown}
                className="absolute top-0 right-0 w-2 h-full cursor-col-resize hover:bg-indigo-500/20 transition-colors z-10"
                style={{ transform: "translateX(50%)" }}
              />
            )}
          </div>

          <div className="flex-1 flex flex-col bg-slate-900/50 backdrop-blur-sm min-w-0">
            {selectedUser ? <ChatWindow /> : <NoConversationPlaceholder />}
          </div>
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}
