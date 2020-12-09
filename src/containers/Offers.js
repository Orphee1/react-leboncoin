import React, { useState, useEffect, useContext} from 'react'
import Axios from "axios"
import {ToggleContext} from "../context/toggleContext"
import "../main.css"
import styled from "styled-components"
import {OffersLarge, OffersSmall, SideBar, SideSearchBox} from "../components"



const Offers = () => {
const [offers, setOffers] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [skip, setSkip] = useState(0)
const limit = 10; 


        const {searchBoxOpen, sideBarOpen, toggleSide} = useContext(ToggleContext)

const fetchData = async () => {

        setIsLoading(true)
        try {
  const response = await Axios.post(
          'http://localhost:5000/api/offers/with-count/', {
          skip: skip,
        limit: limit,
  })
// console.log(response);
if (response.data) {
        const {offers} = response.data
setOffers(offers);
setIsLoading(false);
}

        } catch (error) {
setIsLoading(false); 
console.log(error);
alert("Error fetching data")
        }
}

useEffect(() => {
        
fetchData(); 
// eslint-disable-next-line
}, [])

        return (
                <Wrapper>
                        <section className="small-page">
                                 
                                 <SideBar   
                                 toggleSide={toggleSide}
                                 sideBarOpen={sideBarOpen}
                                 />
                                 
                    {searchBoxOpen ? (
                            <SideSearchBox />
                    ) : (
<OffersSmall 
offers={offers}
isLoading={isLoading}
 />
                    )}



   </section>

<section className="page975">
<OffersLarge 
offers={offers}
isLoading={isLoading}

/>        
</section>
                      
                </Wrapper>
        )
}


export default Offers

const Wrapper = styled.main`
min-height: calc(100vh - 4rem);
.small-page {
        
}

.page975{
        display: none;

}
 @media (min-width: 975px) { 
.small-page {
display: none;
}
.page975{
        display: block;

}
 }
`