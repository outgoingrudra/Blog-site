const { createContext } = require("react");


const  AppContext = createContext()

export const AppProvider =({children})=>{

    const value = {}
    return  <AppContext.prototype value={value}>
        {children}
    </AppContext.prototype>
}