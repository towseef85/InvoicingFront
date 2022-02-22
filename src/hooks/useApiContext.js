import { ApiContext } from "../context/ApiContext";
import { useContext } from "react"

export const useApiContext = () => {
    const context = useContext(ApiContext)
  
    if(!context) {
      throw Error('useApiContext must be used inside an ApiContextProvider')
    }
  
    return context
  }