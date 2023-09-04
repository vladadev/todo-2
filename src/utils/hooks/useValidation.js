import { useState, useEffect } from 'react'

const useValidation = (initialValue, validateFn) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState(null)

  useEffect(() => {
    const validationObj = validateFn(value)
    if (!validationObj.isValid) {
      setError(validationObj.error)
    } else {
      setError(null)
    }
  }, [value, validateFn])

  return [value, setValue, error]
}

export default useValidation
