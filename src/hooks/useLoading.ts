import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLoading = (bool: boolean) => {
    setIsLoading(bool)
  }

  return {
    isLoading,
    handleLoading
  }
}