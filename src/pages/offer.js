import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleOffer } from '../store/offers-actions'
import styled from 'styled-components'
// import { BigCard, Card } from '../components'
import { OfferContainer } from '../containers/UI'

const Offer = () => {
  const { id } = useParams()
  // console.log(id)
  const dispatch = useDispatch()
  const { isLoading, isError } = useSelector((state) => state.ui)
  const { singleOffer: offer, vendorOffers } = useSelector(
    (state) => state.offers
  )
  // console.log(vendorOffers)

  useEffect(() => {
    dispatch(fetchSingleOffer(id))
  }, [dispatch, id])

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push('/')
  //     }, 3000)
  //   }
  //   // eslint-disable-next-line
  // }, [error])

  return (
    <Wrapper>
      <section className='container'>
        {isError && <h4>Sorry, something went wrong...</h4>}
        {isLoading && <h4>Loading...</h4>}
        <OfferContainer offer={offer} num={vendorOffers} />
      </section>
    </Wrapper>
  )
}

export default Offer

const Wrapper = styled.main`
  min-height: calc(100vh);
  background: var(--clr-white);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .container {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    .container {
      width: 100%;
    }
  }
`
