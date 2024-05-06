import { createContext, useContext } from "react";
export const stickyContext = createContext(null)

export const useStickyContext = () => useContext(stickyContext)