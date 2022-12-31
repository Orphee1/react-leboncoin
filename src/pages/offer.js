import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleOffer } from '../store/offers-actions'
import styled from 'styled-components'
// import { BigCard, Card } from '../components'
import { CardContainer } from '../containers/UI'

const Offer = () => {
  const { id } = useParams()
  // console.log(id)
  const dispatch = useDispatch()
  const { isLoading, isError } = useSelector((state) => state.ui)
  const { singleOffer: offer } = useSelector((state) => state.offers)
  // console.log(singleOffer)

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
        <CardContainer offer={offer} />
        {/* <article>
          <h3>{singleOffer.name}</h3>
          <img src={singleOffer.image} alt={singleOffer.name} />
        </article> */}
      </section>
    </Wrapper>
  )
}

export default Offer

const Wrapper = styled.main`
  min-height: calc(100vh - 4rem);
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
  article {
    height: 300px;
    width: 400px;
    margin: 5px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`
