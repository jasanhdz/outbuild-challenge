import { useState } from "react"
import { CommentType } from "@/types/comments"
import CommentsList from "@/components/CommentList"
import Header from "@/components/Header"
import useComments from "@/hooks/useComments"
import CommentModal from "@/components/CommentModal"

function Dashboard() {
  const [selectedComment, setSelectedComment] = useState<CommentType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { comments, isLoading, hasMore, loadMore, errorMessage } = useComments()

  const openModal = (comment: CommentType) => {
    setSelectedComment(comment);
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setSelectedComment(null);
    setIsModalOpen(false);
  }

  return (
    <main>
      <Header />
      <CommentsList
        openModal={openModal}
        comments={comments}
        isLoading={isLoading}
        hasMore={hasMore}
        loadMore={loadMore}
        error={errorMessage}
      />
      <CommentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        comment={selectedComment}
      />
    </main>
  )
}

export default Dashboard