import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptFriendRequest, getFriendRequests, rejectFriendRequest } from "../lib/api"; // Ensure you have rejectFriendRequest
import { Bell, Check, Clock, UserPlus, X } from "lucide-react";
import NoNotificationsFound from "../components/NoNotificationsFound";
import { formatDistanceToNow } from "date-fns";
import toast from "react-hot-toast";

const NotificationsPage = () => {
  const queryClient = useQueryClient();

  const { data: friendRequests, isLoading } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  // Mutation for accepting a friend request
  const { mutate: acceptRequestMutation, isPending: isAccepting } = useMutation({
    mutationFn: acceptFriendRequest,
    onSuccess: () => {
      toast.success("Friend request accepted!");
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
    onError: (error) => {
        toast.error(error.response?.data?.message || "Failed to accept request.");
    }
  });

  // (New) Mutation for rejecting a friend request
  const { mutate: rejectRequestMutation, isPending: isRejecting } = useMutation({
    mutationFn: rejectFriendRequest,
    onSuccess: () => {
      toast.error("Friend request rejected.");
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
    },
     onError: (error) => {
        toast.error(error.response?.data?.message || "Failed to reject request.");
    }
  });

  const incomingRequests = friendRequests?.incomingReqs || [];
  const acceptedRequests = friendRequests?.acceptedReqs || [];

  return (
    // Added bg-base-100 to fix the background color issue
    <div className="bg-base-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-base-content">Notifications</h1>
            <p className="text-base-content/70 mt-1">
                Manage your friend requests and see new connections.
            </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-primary"></span>
          </div>
        ) : (
          <>
            {incomingRequests.length === 0 && acceptedRequests.length === 0 ? (
              <NoNotificationsFound />
            ) : (
              <div className="space-y-10">
                {/* Section for Friend Requests */}
                {incomingRequests.length > 0 && (
                  <section>
                    <h2 className="text-lg font-bold flex items-center gap-3 mb-4">
                      <UserPlus className="h-6 w-6 text-primary" />
                      <span>Friend Requests</span>
                      <span className="inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-base-100 bg-primary rounded-full">
                        {incomingRequests.length}
                      </span>
                    </h2>
                    <div className="space-y-3">
                      {incomingRequests.map((request) => (
                        <div key={request._id} className="card bg-base-200/50 border border-base-300/50 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 ease-in-out">
                          <div className="card-body p-4 flex flex-row items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="avatar">
                                <div className="w-12 h-12 rounded-full ring-2 ring-primary/50 ring-offset-base-100 ring-offset-2">
                                  <img src={request.sender.profilepic} alt={request.sender.FullName} />
                                </div>
                              </div>
                              <div>
                                <p className="font-bold text-base-content">
                                  {request.sender.FullName}
                                </p>
                                <p className="text-xs text-base-content/60 flex items-center gap-1.5 mt-1">
                                    <Clock size={12} />
                                    {formatDistanceToNow(new Date(request.createdAt), { addSuffix: true })}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                className="btn btn-sm btn-outline btn-error btn-circle"
                                onClick={() => rejectRequestMutation(request._id)}
                                disabled={isRejecting || isAccepting}
                              >
                                {isRejecting ? <span className="loading loading-spinner loading-xs"></span> : <X size={16} />}
                              </button>
                              <button
                                className="btn btn-sm btn-primary btn-circle"
                                onClick={() => acceptRequestMutation(request._id)}
                                disabled={isAccepting || isRejecting}
                              >
                               {isAccepting ? <span className="loading loading-spinner loading-xs"></span> : <Check size={16} />}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {/* Section for New Connections */}
                {acceptedRequests.length > 0 && (
                  <section>
                    <h2 className="text-lg font-bold flex items-center gap-3 mb-4">
                      <Bell className="h-6 w-6 text-success" />
                      <span>Recent Activity</span>
                    </h2>
                    <ul className="space-y-3">
                      {acceptedRequests.map((notification) => {
                          const isSender = notification.sender._id === queryClient.getQueryData(['authUser'])?._id;
                          const otherUser = isSender ? notification.recipient : notification.sender;
                          const message = isSender ? `You are now friends with ${otherUser.FullName}` : `${otherUser.FullName} accepted your friend request.`;

                          return (
                            <li key={notification._id} className="flex items-center gap-4 p-3 bg-base-200/50 rounded-lg">
                                <div className="avatar">
                                    <div className="w-10 h-10 rounded-full">
                                        <img src={otherUser.profilepic} alt={otherUser.FullName} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-base-content">{message}</p>
                                    <p className="text-xs text-base-content/60 mt-1 flex items-center gap-1.5">
                                        <Clock size={12} />
                                        {formatDistanceToNow(new Date(notification.updatedAt), { addSuffix: true })}
                                    </p>
                                </div>
                            </li>
                          )
                      })}
                    </ul>
                  </section>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;