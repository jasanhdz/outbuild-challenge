import { useEffect, useState, useCallback } from "react"
import { useGet } from "./useGet"
import type { CommentType } from "@/types/comments"
import { typicodeApi } from "@/api"
import { getRandomAvatarId } from "@/utils/getRandomAvatarId"

interface UseCommentsReturn {
  comments: CommentType[]
  isLoading: boolean
  hasMore: boolean
  loadMore: () => void
  errorMessage: string | null
}

const useComments = (): UseCommentsReturn => {
  const [currentPage, setCurrentPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [comments, setComments] = useState<CommentType[]>([])
  const [avatarMap, setAvatarMap] = useState<Record<number, number>>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const { isLoading, refetch } = useGet<CommentType[]>(
    '/comments',
    typicodeApi,
    { _page: String(currentPage), _limit: '20' },
    undefined,
    { enabled: false }
  )

  useEffect(() => {
    const loadComments = async () => {
      try {
        const fetchData = await refetch()
        const newData = fetchData?.data || []

        if (newData.length) {
          setComments((prevComments) => {
            const existingIds = new Set(prevComments.map(comment => comment.id))
            const filteredNewData = newData.filter(comment => !existingIds.has(comment.id))

            const mappedNewData = filteredNewData.map(comment => {
              // Asigna avatarId basado en comment.id
              const avatarId = avatarMap[comment.id] || getRandomAvatarId(comment.id)
              return { ...comment, avatarId }
            })

            // Actualiza el avatarMap con los nuevos avatarIds
            setAvatarMap((prevMap) => {
              const newMap = { ...prevMap }
              mappedNewData.forEach(comment => {
                if (!newMap[comment.id]) {
                  newMap[comment.id] = comment.avatarId
                }
              })
              return newMap
            })

            return [...prevComments, ...mappedNewData]
          })

          // Si la cantidad de nuevos datos es menor a 20, no hay más comentarios
          if (newData.length < 20) {
            setHasMore(false)
          }
        } else {
          setHasMore(false)
        }
      } catch (error) {
        console.error(error)
        setErrorMessage('Hubo un error al cargar los comentarios.')
      }
    }

    loadComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const loadMore = useCallback(() => {
    if (!isLoading && hasMore) {
      setCurrentPage((prevPage) => prevPage + 1)
    }
  }, [isLoading, hasMore])

  return {
    comments,
    isLoading,
    hasMore,
    loadMore,
    errorMessage
  }
}

export default useComments
