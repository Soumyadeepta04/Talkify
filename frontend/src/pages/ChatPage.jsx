import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api.js";
import {
  Channel,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
  useChatContext,
} from "stream-chat-react";
import { StreamChat } from "stream-chat";
import toast from "react-hot-toast";
import ChatLoader from "../components/ChatLoader";
import { VideoIcon, ArrowLeft } from "lucide-react";
import "stream-chat-react/dist/css/v2/index.css";

const TALKIFY_API_KEY = import.meta.env.VITE_TALKIFY_API_KEY;

// New Custom Channel Header
const CustomChannelHeader = ({ onVideoCallClick }) => {
    const { channel } = useChatContext();
    const navigate = useNavigate();
    const { authUser } = useAuthUser();
    
    // Get the other member of the chat
    const otherMember = Object.values(channel.state.members).find(
        (member) => member.user.id !== authUser?._id
    );

    return (
        <div className="str-chat__header-livestream">
            <button onClick={() => navigate(-1)} className="mr-4 btn btn-ghost btn-circle">
                <ArrowLeft />
            </button>
            <div className="str-chat__header-livestream-left">
                <div className="str-chat__avatar str-chat__avatar--circle str-chat__avatar--sm">
                    <img src={otherMember?.user.image} alt={otherMember?.user.name} className="str-chat__avatar-image"/>
                </div>
                <p className="str-chat__header-livestream-left--title">{otherMember?.user.name || "Chat"}</p>
            </div>
            <div className="str-chat__header-livestream-right">
                <button onClick={onVideoCallClick} className="btn btn-primary btn-sm text-white rounded-full">
                    <VideoIcon className="size-5" />
                    <span className="ml-2 hidden sm:inline">Start Call</span>
                </button>
            </div>
        </div>
    );
};


const ChatPage = () => {
  const { id: targetUserId } = useParams();
  const [chatClient, setChatClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const { authUser } = useAuthUser();

  const { data: tokenData, isLoading: isTokenLoading } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser,
  });

  useEffect(() => {
    if (!tokenData?.token || !authUser) return;

    const client = StreamChat.getInstance(TALKIFY_API_KEY);
    
    client.connectUser(
      {
        id: authUser._id,
        name: authUser.FullName,
        image: authUser.profilepic,
      },
      tokenData.token
    ).then(() => {
        const channelId = [authUser._id, targetUserId].sort().join("-");
        const newChannel = client.channel("messaging", channelId, {
            members: [authUser._id, targetUserId],
            name: `Chat with ${targetUserId}`,
        });
        newChannel.watch();
        setChannel(newChannel);
    }).catch(err => {
        console.error("Chat connection error:", err);
        toast.error("Could not connect to chat.");
    });
    
    setChatClient(client);

    return () => {
        if (client) {
            client.disconnectUser().catch(console.error);
        }
    };
  }, [tokenData, authUser, targetUserId]);

  const handleVideoCall = () => {
    if (channel) {
      const callId = [authUser._id, targetUserId, Date.now()].sort().join("-");
      const callUrl = `${window.location.origin}/call/${callId}`;
      channel.sendMessage({
        text: `I've started a video call. Click the link to join me!`,
        attachments: [
            {
                type: 'video-call',
                call_id: callId,
                url: callUrl,
                title: 'Join Video Call',
                text: 'Click here to join the call'
            }
        ]
      }).then(() => {
        window.open(callUrl, '_blank'); // Open the call in a new tab
      });
      toast.success("Video call started!");
    }
  };

  if (isTokenLoading || !chatClient || !channel) return <ChatLoader />;

  return (
    <div className="custom-chat-container">
      <Chat client={chatClient} theme="str-chat__theme-dark">
        <Channel channel={channel}>
          <Window>
            <CustomChannelHeader onVideoCallClick={handleVideoCall} />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
};

export default ChatPage;