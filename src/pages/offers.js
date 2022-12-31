import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOffers } from '../store/offers-actions'
import { OffersBox, Title } from '../components'

import {
  CardContainer,
  SearchBoxContainer,
  SkipContainer,
} from '../containers/UI'

import styled from 'styled-components'

const Offers = () => {
  const dispatch = useDispatch()
  const { offersCart, fetchParams } = useSelector((state) => state.offers)
  const { isLoading, isError } = useSelector((state) => state.ui)

  useEffect(() => {
    dispatch(fetchOffers(fetchParams))
  }, [dispatch, fetchParams])

  return (
    <Wrapper>
      <Title>
        Des millions de petites annonces et autant d’occasions de se faire
        plaisir
      </Title>
      <SearchBoxContainer />
      {isError && <h4>Sorry, something went wrong...</h4>}
      {isLoading && <h4>Loading...</h4>}
      <OffersBox>
        {offersCart.map((offer) => {
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <CardContainer offer={offer} />
            </Link>
          )
        })}
      </OffersBox>
      <SkipContainer />
    </Wrapper>
  )
}

export default Offers

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
  background: var(--clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem;
  @media screen and (max-width: ${({ theme }) => theme.large_mobile}) {
    padding: 2rem;
  }
  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding: 1rem 0;
  }
`
