import React, { useContext } from "react";
import { ToggleContext } from "../context/toggleContext";
import "../main.css";
import styled from "styled-components";
import {
  OffersLarge,
  OffersSmall,
  SideBar,
  SideSearchBox,
} from "../components";

const Offers = () => {
  const { searchBoxOpen, sideBarOpen, toggleSide } = useContext(ToggleContext);

  return (
    <Wrapper>
      <section className="small-page">
        <SideBar toggleSide={toggleSide} sideBarOpen={sideBarOpen} />

        {searchBoxOpen ? <SideSearchBox /> : <OffersSmall />}
      </section>

      <section className="page975">
        <OffersLarge />
      </section>
    </Wrapper>
  );
};

export default Offers;

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  .small-page {
  }

  .page975 {
    display: none;
  }
  @media (min-width: 1064px) {
    .small-page {
      display: none;
    }
    .page975 {
      display: block;
    }
  }
`;
