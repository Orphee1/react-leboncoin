import { useState, useCallback } from 'react'

const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = useCallback(
    async (requestConfig) => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        })
        if (!response.ok) {
          throw new Error('Request failed')
        }
        const data = await response.json()
        applyData(data)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    },
    [applyData]
  )

  return { isLoading, error, sendRequest }
}

export default useHttp
