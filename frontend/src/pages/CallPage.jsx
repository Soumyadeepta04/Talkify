import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuthUser from "../hooks/useAuthUser";
import { useQuery } from "@tanstack/react-query";
import { getStreamToken } from "../lib/api.js";
import {
  StreamVideo,
  StreamVideoClient,
  StreamCall,
  useCall,
  CallControls,
  SpeakerLayout,
  StreamTheme,
  CallingState,
  useCallStateHooks,
  RingingCallContent,
  ParticipantView,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import toast from "react-hot-toast";
import PageLoader from "../components/PageLoader";
import { Mic, Video, VideoOff, MicOff, PhoneOff } from "lucide-react";

const TALKIFY_API_KEY = import.meta.env.VITE_TALKIFY_API_KEY;

// New Lobby Component
const CallLobby = ({ call, onJoin }) => {
    const [micOn, setMicOn] = useState(true);
    const [camOn, setCamOn] = useState(true);

    useEffect(() => {
        call?.microphone.enable();
        call?.camera.enable();
    }, [call]);

    const toggleMic = () => {
        micOn ? call?.microphone.disable() : call?.microphone.enable();
        setMicOn(!micOn);
    };

    const toggleCam = () => {
        camOn ? call?.camera.disable() : call?.camera.enable();
        setCamOn(!camOn);
    };

    return (
        <div className="relative flex flex-col items-center justify-center h-full w-full p-4 bg-base-300/50 backdrop-blur-md rounded-lg border border-base-content/10">
            <h2 className="text-2xl font-bold mb-4">Ready to join?</h2>
            <div className="w-full max-w-md h-64 bg-black rounded-lg overflow-hidden mb-4">
                <ParticipantView participant={call.localParticipant} />
            </div>
            <div className="flex items-center gap-4 mb-6">
                <button onClick={toggleMic} className={`btn btn-circle ${micOn ? 'btn-primary' : 'btn-ghost'}`}>
                    {micOn ? <Mic size={24} /> : <MicOff size={24} />}
                </button>
                <button onClick={toggleCam} className={`btn btn-circle ${camOn ? 'btn-primary' : 'btn-ghost'}`}>
                    {camOn ? <Video size={24} /> : <VideoOff size={24} />}
                </button>
            </div>
            <button onClick={onJoin} className="btn btn-success text-white">
                Join Call
            </button>
        </div>
    );
};


const CallPage = () => {
  const { id: callId } = useParams();
  const [client, setClient] = useState(null);
  const [call, setCall] = useState(null);
  const { authUser, isLoading } = useAuthUser();

  const { data: tokenData, isLoading: isTokenLoading } = useQuery({
    queryKey: ["streamToken"],
    queryFn: getStreamToken,
    enabled: !!authUser,
  });

  useEffect(() => {
    if (!tokenData?.token || !authUser || !callId) return;

    const user = {
      id: authUser._id,
      name: authUser.FullName,
      image: authUser.profilepic,
    };

    const videoClient = new StreamVideoClient({
      apiKey: TALKIFY_API_KEY,
      user,
      token: tokenData.token,
    });
    
    const callInstance = videoClient.call("default", callId);
    callInstance.join({ create: true }).catch(err => {
        console.error("Failed to join call", err);
        toast.error("Could not join the call.");
    });

    setClient(videoClient);
    setCall(callInstance);

    return () => {
      callInstance.leave().catch(console.error);
      videoClient.disconnectUser().catch(console.error);
      setClient(null);
      setCall(null);
    };
  }, [tokenData, authUser, callId]);

  if (isLoading || isTokenLoading || !client || !call) return <PageLoader />;

  return (
    <div className="h-screen w-screen flex items-center justify-center p-4 bg-base-300 relative">
      <div className="call-page-background" style={{ backgroundImage: `url(${authUser?.profilepic})` }} />
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <CallContent />
        </StreamCall>
      </StreamVideo>
    </div>
  );
};

const CallContent = () => {
    const { useCallCallingState, useParticipantCount } = useCallStateHooks();
    const callingState = useCallCallingState();
    const participantCount = useParticipantCount();
    const navigate = useNavigate();
    const call = useCall(); // You need to get the call object from the context
    const [showLobby, setShowLobby] = useState(true);

    useEffect(() => {
        if (callingState === CallingState.LEFT) {
            navigate("/");
        }
    }, [callingState, navigate]);

    if (callingState === CallingState.IDLE || callingState === CallingState.UNKNOWN) {
        return <PageLoader />;
    }

    const handleJoin = () => {
        setShowLobby(false);
    };

    if (showLobby) {
        return <CallLobby call={call} onJoin={handleJoin} />;
    }

    return (
        <StreamTheme className="w-full h-full">
            {participantCount > 1 ? (
                <SpeakerLayout />
            ) : (
                <div className="flex items-center justify-center h-full w-full">
                    <RingingCallContent />
                </div>
            )}
            <CallControls onLeave={() => navigate("/")} />
        </StreamTheme>
    );
};

export default CallPage;