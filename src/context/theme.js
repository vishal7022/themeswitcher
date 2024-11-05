import { useContext, createContext } from "react";

export const Themcontext = createContext({
    thememode : "dark",
    light: "light",
    dark: "dark"
})

export const ThemeProvider = Themcontext.Provider

export default function Usetheme(){
    return useContext(Themcontext)
}