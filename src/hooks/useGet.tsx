import { useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosError, AxiosInstance } from 'axios'
import { consoleErrorHandler } from '@/utils/error-handler'
import { UseGetQueryConfig } from '@/types/request'

export function useGet<T>(
  url: string,
  api: AxiosInstance,
  searchParams?: Record<string, string>,
  errorHandler = consoleErrorHandler,
  config?: UseGetQueryConfig,
) {
  const queryClient = useQueryClient()
  const queryKey = config?.queryKey || [url, searchParams]

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      try {
        const response = await api.get(url, { params: searchParams })
        return response.data as T
      } catch (error) {
        errorHandler(error as unknown as AxiosError)
        throw error
      }
    },
    ...config
  })

  const setData = (newData: T, customQueryKey?: string[]) => {
    const key = customQueryKey || queryKey
    queryClient.setQueryData(key, newData)
  }

  return { data, isLoading, error, refetch, setData }
}
