import React from 'react'
import "../main.css"
import styled from "styled-components"

const SideSearchBox = () => {
        return (
                <Wrapper>
                        <div>
                                <h4>SideSearchBox</h4>
                        </div>
                </Wrapper>
        )
}

export default SideSearchBox

const Wrapper = styled.section`
display: grid;
min-height: 100vh;
z-index: 0; 
/* grid-template-rows: 3rem 4rem auto; 
grid-row-gap: 1rem; */
background: red;
`