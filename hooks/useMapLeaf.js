import { useState, createContext, useContext } from 'react'

export const MapContext = createContext()

export const MapProvider = ({ children }) => {
  const [messages, setMessages] = useState([])
  return <MapContext.Provider value={{ messages, setMessages }}>{children}</MapContext.Provider>
}

export const useMapLeaf = () => {
  const { messages, setMessages } = useContext(MapContext)
}
