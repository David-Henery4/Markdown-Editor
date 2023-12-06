"use client"
import { useContext } from "react"
import { AppContext } from "./Context"

const useGlobalContext = () => {
  return (
    useContext(AppContext)
  )
}

export default useGlobalContext