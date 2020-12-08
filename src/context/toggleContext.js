import React, {useState, createContext} from 'react'


 const ToggleContext = createContext()

 const ToggleProvider = ({children}) => {
        const [searchBoxOpen, setSearchBoxOpen] = useState(false)
        const [sideBarOpen, setSideBarOpen] = useState(false)
        console.log(sideBarOpen)
        const toggleSearch = () => {  
        setSearchBoxOpen(!searchBoxOpen)
}
const toggleSide = () => {
        setSideBarOpen(!sideBarOpen)
}

return (
       <ToggleContext.Provider
       value={{searchBoxOpen, toggleSearch, sideBarOpen, toggleSide}}
       >
               {children}
       </ToggleContext.Provider>
)

}

export {ToggleContext, ToggleProvider }