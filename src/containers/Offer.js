import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"; 
import Axios from "axios"
import "../main.css"
import styled from "styled-components"
import {BigCard} from "../components/"

const Offer = () => {
        const [offer, setOffer] = useState({})
        const [productNumber, setProductNumber] = useState()
        const [isLoading, setIsLoading] = useState(false)
        const {id} = useParams(); 
        // console.log(offer);

const fetchData = async () => {
        setIsLoading(true)
        try {
const response = await Axios.get("http://localhost:5000/api/offer?id=" + id)
// console.log(response);
if (response.data) {
setOffer(response.data[0]); 
setProductNumber(response.data[1]); 
setIsLoading(false); 
}
        } catch (error) {
                console.log(error);
                alert("Error fetching data"); 
                setIsLoading(false); 
        }    
}

useEffect(() => {
fetchData(); 
// eslint-disable-next-line
}, [])


        return (
                <Wrapper>
                       <section className="big-card-container d-flex">
                               {isLoading? (
<p>Loading...</p>
                               ): (
<BigCard 
offer={offer}
productNumber={productNumber}
/>
                               )}

                       </section>
                </Wrapper>
        )
}


export default Offer

const Wrapper = styled.main`
min-height: calc(100vh - 4rem);
.big-card-container {
        width: 100%;
}
@media screen and (min-width: 975px) {
.big-card-container {
        width: 80%;
        margin: 3rem auto 1rem auto;
}

}

`