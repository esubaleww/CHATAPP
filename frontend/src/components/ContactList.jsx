import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import UsersLoadingSkeleton from "./UsersLoadingSkeleton";

import NoChatsFound from "./NoChatsFound";

export default function ContactList() {
  const { getAllContacts, allContacts, isUserLoading, setSelectedUser } =
    useChatStore();
  const { onlineUsers } = useAuthStore();
  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  if (isUserLoading) return <UsersLoadingSkeleton />;
  if (allContacts.length === 0) return <NoChatsFound />;
  return (
    <>
      {allContacts.map((contact) => (
        <div
          key={contact._id}
          className="bg-cyan-500/10 rounded-lg p-4 hover:bg-slate-500/20 cursor-pointer transition-colors"
          onClick={() => setSelectedUser(contact)}
        >
          <div className="flex items-center gap-3">
            <div
              className={`avatar ${onlineUsers?.includes(contact._id) ? "avatar-online" : "avatar-offline"}`}
            >
              {" "}
              <div className="size-12 rounded-full">
                <img
                  src={contact.profilePic || "/avatar.png"}
                  alt={contact.fullname}
                />
              </div>
            </div>
            <div>
              <h4 className="text-slate-200 font-medium truncate">
                {contact.fullname}
              </h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
