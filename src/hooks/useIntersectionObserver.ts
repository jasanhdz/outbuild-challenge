import { MutableRefObject, useEffect, useRef } from "react"

function useIntersectionObserver(callback: () => void, options?: IntersectionObserverInit):  MutableRefObject<HTMLDivElement | null> {
    const observerRef = useRef<IntersectionObserver | null>(null)
    const elementRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      if (observerRef.current) observerRef.current.disconnect()

      observerRef.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback()
        }
      }, options)

      const currentElement = elementRef.current
      if (currentElement) {
        observerRef.current.observe(currentElement)
      }

      return () => {
        if (observerRef.current) observerRef.current.disconnect()
      }

    }, [callback, options])

    return elementRef
}

export default useIntersectionObserver