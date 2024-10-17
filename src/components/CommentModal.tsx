import React from 'react'
import Modal from './Modal'
import type { CommentType } from '@/types/comments'

interface CommentModalProps {
  isOpen: boolean
  onClose: () => void
  comment: CommentType | null
}

const CommentModal: React.FC<CommentModalProps> = ({ isOpen, onClose, comment }) => {
  if (!comment) return null

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Detalles del Comentario">
      <div className="flex flex-col items-center space-y-4">
        {/* Avatar */}
        <img
          src={`https://i.pravatar.cc/150?img=${comment.avatarId}`}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          loading="lazy"
        />

        <div className="w-full bg-[#3a3b3c] p-4 rounded-lg shadow-inner flex flex-col gap-1">
          <p className="text-lg text-white"><strong>ID:</strong> {comment.id}</p>
          <p className="text-lg text-white"><strong>Post ID:</strong> {comment.postId}</p>
          <p className="text-lg text-white"><strong>Nombre:</strong> {comment.name}</p>
          <p className="text-lg text-white"><strong>Email:</strong> {comment.email}</p>
          <p className="text-lg text-white"><strong>Comentario:</strong> {comment.body}</p>
        </div>
      </div>
    </Modal>
  )
}

export default CommentModal
