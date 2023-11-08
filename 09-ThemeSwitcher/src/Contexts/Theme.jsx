import  React ,{createContext, useContext } from "react";

 export const ThemeContext= createContext({
    themeMode:'light',
    lightTheme: ()=>{},
    darkTheme: ()=>{}

})

export  const ThemeContextProvider = ThemeContext.Provider;

export default function Theme(){
    return useContext(ThemeContext)
}

