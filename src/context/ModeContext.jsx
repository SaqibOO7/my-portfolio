import { createContext, useContext, useState } from "react";

export const ModeContext = createContext();

export const useModeContext = () => {
    return useContext(ModeContext)
}

export const ModeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(true);

    return <ModeContext.Provider value={{ theme, setTheme }}>

        {children}

    </ModeContext.Provider>

}