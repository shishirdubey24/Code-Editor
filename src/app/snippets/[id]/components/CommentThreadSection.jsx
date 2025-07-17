import { useState } from "react";
import toast from "react-hot-toast";
import { MessageSquare } from "lucide-react";
//import Comment from "./SingleCommentCard";
import SingleCommentCard from "./SingleCommentCard";
import NewCommentEditor from "./NewCommentEditor";
// Simulate a logged-in user
const currentUser = {
  id: "user_123",
  name: "Demo User",
};

function CommentThreadSection({ snippetId }) {
  const [comments, setComments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deletingCommentId, setDeletingCommentId] = useState(null);

  const handleSubmitComment = async (content) => {
    setIsSubmitting(true);
    try {
      const newComment = {
        _id: `${Date.now()}`,
        content,
        userId: currentUser.id,
        createdAt: new Date().toISOString(),
      };
      setComments((prev) => [newComment, ...prev]);
    } catch (err) {
      console.error("Error adding comment:", err);
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteComment = (commentId) => {
    setDeletingCommentId(commentId);
    try {
      setComments((prev) => prev.filter((c) => c._id !== commentId));
    } catch (err) {
      console.error("Error deleting comment:", err);
      toast.error("Something went wrong");
    } finally {
      setDeletingCommentId(null);
    }
  };

  return (
    <div className="bg-[#121218] border border-[#ffffff0a] rounded-2xl overflow-hidden">
      <div className="px-6 sm:px-8 py-6 border-b border-[#ffffff0a]">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          Discussion ({comments.length})
        </h2>
      </div>

      <div className="p-6 sm:p-8">
        {currentUser ? (
          <NewCommentEditor onSubmit={handleSubmitComment} isSubmitting={isSubmitting} />
        ) : (
          <div className="bg-[#0a0a0f] rounded-xl p-6 text-center mb-8 border border-[#ffffff0a]">
            <p className="text-[#808086] mb-4">Sign in to join the discussion</p>
            <button className="px-6 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#2563eb] transition-colors">
              Sign In
            </button>
          </div>
        )}

        <div className="space-y-6">
          {comments.map((comment) => (
            <SingleCommentCard
              key={comment._id}
              comment={comment}
              onDelete={handleDeleteComment}
              isDeleting={deletingCommentId === comment._id}
              currentUserId={currentUser.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommentThreadSection;
