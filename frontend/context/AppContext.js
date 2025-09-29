const { createContext, useContext } = require("react");


const  AppContext = createContext()

export const AppProvider =({children})=>{

    const value = {}
    return  <AppContext.prototype value={value}>
        {children}
    </AppContext.prototype>
}


export const useAppContext = ()=>{

    return  useContext(AppContext)
}