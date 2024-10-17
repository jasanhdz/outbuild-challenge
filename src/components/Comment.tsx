import { MutableRefObject } from 'react'
import { FaEye } from 'react-icons/fa'
import type { CommentType } from '@/types/comments'

interface CommentProps {
  comment: CommentType;
  lastCommentRef: MutableRefObject<HTMLDivElement | null> | null
  openModal: (comment: CommentType) => void;
}

function Comment({ comment, lastCommentRef, openModal }: CommentProps) {
  return (
    <div
      ref={lastCommentRef}
      key={`${comment.postId}-${comment.id}`}
      className="flex items-start bg-[#242526] rounded-lg shadow p-4"
    >
      {/* Avatar */}
      <img
        src={`https://i.pravatar.cc/150?img=${comment?.avatarId}`}
        alt="Avatar"
        className="w-12 h-12 rounded-full mr-4"
      />

      {/* Contenido del Comentario */}
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#e4e6ea]">{comment.name}</h3>
          <button
            onClick={() => openModal(comment)}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Ver más"
          >
            <FaEye />
          </button>
        </div>
        <p className="text-sm text-[#b1b3b9] mb-2">{comment.email}</p>
        <p className="text-[#e4e6ea] line-clamp-2">{comment.body}</p>
      </div>
    </div>
  );
};

export default Comment;
