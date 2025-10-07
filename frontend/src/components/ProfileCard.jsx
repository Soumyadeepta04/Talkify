import useAuthUser from "../hooks/useAuthUser";
import { MapPin, MessageCircle } from "lucide-react";

const ProfileCard = () => {
  const { authUser } = useAuthUser();

  if (!authUser) return <div className="text-center mt-20">Loading profile...</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl rounded-2xl p-6">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary ring-offset-base-100">
            <img src={authUser.profilepic || "/default-avatar.png"} alt="Profile" />
          </div>
        </div>

        {/* Name & Bio - Corrected FullName to fullName */}
        <h2 className="text-2xl font-bold text-center">{authUser.FullName}</h2>
        {authUser.bio && <p className="text-center opacity-70 mt-1">{authUser.bio}</p>}

        {/* Location */}
        {authUser.location && (
          <div className="flex items-center justify-center gap-2 mt-2 text-sm text-base-content opacity-70">
            <MapPin className="h-4 w-4" />
            <span>{authUser.location}</span>
          </div>
        )}

        {/* Languages */}
        <div className="grid grid-cols-2 gap-4 mt-4 text-center">
          <div className="bg-base-300 rounded-lg p-2">
            <span className="text-xs opacity-70">Native</span>
            <p className="font-semibold">{authUser.nativeLanguage}</p>
          </div>
          <div className="bg-base-300 rounded-lg p-2">
            <span className="text-xs opacity-70">Learning</span>
            <p className="font-semibold">{authUser.learningLanguage}</p>
          </div>
        </div>

        {/* Contact / Message */}
        <div className="mt-6 flex justify-center">
          <button className="btn btn-primary btn-sm flex items-center gap-2">
            <MessageCircle className="h-4 w-4" /> Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;