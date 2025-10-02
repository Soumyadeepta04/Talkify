import User from "../models/User.js";
import FriendRequest from "../models/FriendRequest.js"

export async function getRecommendedUsers(req,res){
try{
    const currentUserId = req.user.id;
    const currentUser = req.user;

    // Get all pending friend requests sent by the current user
    const pendingRequests = await FriendRequest.find({
        sender: currentUserId,
        status: "pending"
    });

    // Get the recommended users
    const recommendedUsers = await User.find({
        $and: [
            {_id: {$ne: currentUserId}}, // exclude current user
            {_id: {$nin: currentUser.friends}}, // exclude current user's friends
            {isOnboarded: true}
        ]
    });

    // Add hasPendingRequest field to each recommended user
    const enhancedUsers = recommendedUsers.map(user => {
        const hasPendingRequest = pendingRequests.some(
            req => req.recipient.toString() === user._id.toString()
        );
        return {
            ...user.toObject(),
            hasPendingRequest
        };
    });

    res.status(200).json(enhancedUsers);
} catch(error){
    console.error ("Error in getRecommendedUsers controller", error.message);
    res.status(500).json({message: "Internal Server Error"});
    }
}

export async function getMyFriends(req, res) {
    try{
        const user = await User.findById(req.user.id)
        .select("friends")
        .populate("friends", "FullName profilepic nativeLanguage learningLanguage");

    res.status(200).json(user.friends);
    }
    catch(error){
        console.error("Error in getMyFriends controller", error.message);
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export async function sendFriendRequest(req, res){
    try{
        const myId = req.user.id;
        const { id:recipientId } =req.params

        if(myId === recipientId) return res.status(400).json({message:"you can't send friend request to yourself"})

        const recipient = await User.findById(recipientId)
        if(!recipient){
            return res.status(404).json({ message: "Recipient not found"});
        }

        // check if user is already friends
        if(recipient.friends.includes(myId)){
            return res.status(400).json({message: "You are already friends with this user"});
        }

        // check if the user is already exists
    
    const existingRequest = await FriendRequest.findOne ({
        $or:[
            { sender: myId, recipient: recipientId},
            { sender: recipientId, recipient: myId},
        ],
    })

    if(existingRequest){
        return res.status(400).json({ message: "A friend request already exists between you and this user"});
    }

    const friendRequest = await FriendRequest.create({
        sender: myId,
        recipient: recipientId,
    });

        res.status(201).json(friendRequest);

    } catch(error){
        console.error("Error in sendFriendRequest controller", error.message);
        res.status(500).json({ message: "Internal Server Error"});
    }
}

export async function acceptFriendRequest(req,res){
    try{
        const {id:requestId} = req.params
        const friendRequest = await FriendRequest.findById(requestId);

        if(!friendRequest){
            return res.status(404).json({message: "Friend request not found"});
        }

        // verify the current user is the recipient
         if(friendRequest.recipient.toString() !== req.user.id){
            return res.status(403).json({message: "You are not authorized to accept this request"});
        }

        friendRequest.status = "accepted";
        await friendRequest.save();

        // add each user to the other's friends array
        // addToSet: adds elements to an array only if they do not already exist in the set
        await User.findByIdAndUpdate(friendRequest.sender, {
            $addToSet: { friends: friendRequest.recipient},
        });
        await User.findByIdAndUpdate(friendRequest.recipient, {
            $addToSet: { friends: friendRequest.sender},
        });

        res.status(200).json({message:  "Friend Request Accepted"});

    } catch(error){
        console.log("Error in acceptFriendRequest controller", error.message);
        res.status(500).json({message: "Internal Server Error"});

    }
}

export async function getFriendRequests(req,res){
    try{
        const incomingReqs = await FriendRequest.find({
            recipient: req.user.id,
            status: "pending",
        }).populate("sender", "FullName profilepic nativeLanguage learningLanguage");

        const acceptedReqs = await FriendRequest.find({
            $or: [
                { recipient: req.user.id, status: "accepted" },
                { sender: req.user.id, status: "accepted" }
            ]
        }).populate("sender", "FullName profilepic")
        .populate("recipient", "FullName profilepic");

        res.status(200).json({incomingReqs, acceptedReqs});
    }
    catch(error){
        console.error("Error in getFriendRequests controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}

export async function getOutgoingFriendReqs(req,res){
    try{
        const outgoingRequests = await FriendRequest.find({
            sender: req.user.id,
            status: "pending",
        }).populate("recipient", "FullName profilepic nativeLanguage learningLanguage");
        res.status(200).json(outgoingRequests);
    }

    catch(error){
        console.log("Error in getOutgoingFriendReqs controller", error.message);
        res.status(500).json({ message: "internal Server Error"});
    }
}

