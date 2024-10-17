export interface UseGetQueryConfig {
  suspense?: boolean
  params?: Record<string, string>
  headers?: Record<string, string>
  signal?: AbortSignal
  enabled?: boolean
  retry?: boolean
  queryKey?: string[]
}