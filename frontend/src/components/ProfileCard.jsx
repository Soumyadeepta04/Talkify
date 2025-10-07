import useAuthUser from "../hooks/useAuthUser";
import { MapPin } from "lucide-react";

const ProfileCard = () => {
  const { authUser } = useAuthUser();

  if (!authUser) {
    return <div className="text-center mt-20">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-4">
      <div className="card w-full max-w-md bg-base-200 shadow-xl rounded-2xl p-6">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary ring-offset-base-100 ring-offset-2">
            {/* Corrected to use 'profilePic' to match OnboardingPage */}
            <img src={authUser.profilepic || "/default-avatar.png"} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Name & Bio - Using 'FullName' to match OnboardingPage */}
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
        <div className="grid grid-cols-2 gap-4 mt-6 text-center">
          <div className="bg-base-300 rounded-lg p-3">
            <span className="text-xs opacity-70 block mb-1">Native Language</span>
            <p className="font-semibold capitalize">{authUser.nativeLanguage}</p>
          </div>
          <div className="bg-base-300 rounded-lg p-3">
            <span className="text-xs opacity-70 block mb-1">Learning Language</span>
            <p className="font-semibold capitalize">{authUser.learningLanguage}</p>
          </div>
        </div>

        {/* "Send Message" button has been removed as requested. */}
      </div>
    </div>
  );
};

export default ProfileCard;