import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../main.css";
import styled from "styled-components";
import { BigCard } from "../components/";
import { useProductsContext } from "../context/productsContext";

const url =
  // "http://localhost:5000/api/offer?id=",
  "https://leboncoinhl.herokuapp.com/api/offer?id=";

const Offer = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    fetchSingleProduct,
    single_offer_loading: loading,
    single_offer_error: error,
    single_offer: offer,
    vendor_offers,
  } = useProductsContext();

  useEffect(() => {
    console.log("fetch fired");
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return (
      <Wrapper>
        <section className="big-card-container d-flex">
          <h2>chargement en cours...</h2>
        </section>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <section className="big-card-container d-flex">
          <h2>Impossible de charger la page</h2>
        </section>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <section className="big-card-container d-flex">
        <BigCard offer={offer} number={vendor_offers} />
      </section>
    </Wrapper>
  );
};

export default Offer;

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  .big-card-container {
    width: 100%;
  }
  @media screen and (min-width: 1064px) {
    .big-card-container {
      width: 80%;
      margin: 3rem auto 1rem auto;
    }
  }
`;
