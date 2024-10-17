import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import type { CommentType } from "@/types/comments"
import { Loader } from "./loader"
import Comment from "./Comment"

interface CommentListProps {
  comments: CommentType[]
  isLoading: boolean
  loadMore: () => void
  hasMore: boolean
  error?: string | null
  openModal: (comment: CommentType) => void
}

function CommentsList({ comments, isLoading, hasMore, loadMore, error, openModal }: CommentListProps) {
  const lastCommentRef = useIntersectionObserver(() => {
    if (hasMore && !isLoading) {
      loadMore()
    }
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  })

  if (isLoading && !comments.length) {
    return (
      <div className="container mx-auto p-4">
        <p>Cargando comentarios...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {error && (
        <div className="flex justify-center mb-4">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      )}

      <ul className="space-y-4">
        {comments.map((comment, index) => {
          const isLast = comments.length === index + 1 && hasMore;
          return (
            <Comment
              key={`${comment.postId}-${comment.id}`}
              comment={comment}
              lastCommentRef={isLast ? lastCommentRef : null}
              openModal={openModal}
            />
          );
        })}
      </ul>

      {isLoading && (
        <div className="flex justify-center mt-4">
          <Loader size={30} width={4} />
          <p className="text-blue-500 text-lg ml-2">Cargando más comentarios...</p>
        </div>
      )}
    </div>
  );
};

export default CommentsList;
