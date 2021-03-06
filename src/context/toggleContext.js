import React, {useState, createContext} from 'react'


 const ToggleContext = createContext()

 const ToggleProvider = ({children}) => {
        const [searchBoxOpen, setSearchBoxOpen] = useState(false)
        const [sideBarOpen, setSideBarOpen] = useState(false)
         const [modal, setModal] = useState(false);

        const toggleSearch = () => {  
        setSearchBoxOpen(!searchBoxOpen)
}
const toggleSide = () => {
        setSideBarOpen(!sideBarOpen)
}

return (
       <ToggleContext.Provider
       value={{searchBoxOpen, toggleSearch, sideBarOpen, toggleSide, modal, setModal}}
       >
               {children}
       </ToggleContext.Provider>
)

}

export {ToggleContext, ToggleProvider }