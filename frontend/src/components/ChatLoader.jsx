const ChatLoader = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base-100 p-4">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full bg-primary animate-pulse [animation-delay:-0.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-pulse [animation-delay:-0.15s]"></div>
        <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
      </div>
      <p className="mt-6 text-center text-lg font-semibold text-base-content/80">
        Connecting to Chat...
      </p>
    </div>
  );
};

export default ChatLoader;