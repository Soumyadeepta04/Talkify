import { LoaderIcon } from "lucide-react";

function ChatLoader() {
  return (
    <div className="h-[93vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#c9e8c9] to-[#b7e7bb]">
      <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg flex flex-col items-center">
        <LoaderIcon className="animate-spin size-12 text-green-700" />
        <p className="mt-4 text-lg font-semibold tracking-wide text-green-800">
          Connecting to chat...
        </p>
        <p className="text-sm text-green-700 mt-1">
          Please wait a moment 🚀
        </p>
      </div>
    </div>
  );
}

export default ChatLoader;