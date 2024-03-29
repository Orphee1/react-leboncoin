import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card } from './index'
import { ToggleContext } from '../context/toggleContext'
import { useProductsContext } from '../context/productsContext'
import { ImLocation, ImStarFull } from 'react-icons/im'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const OffersSmall = () => {
  const { toggleSearch } = useContext(ToggleContext)
  const { count, handleSkip, isLoading, limit, offers } = useProductsContext()
  //  console.log(offers);
  let pageNumber = count / limit
  // counter required to skip pages
  const [counter, setCounter] = React.useState(1)

  React.useEffect(() => {
    handleSkip((counter - 1) * limit)
    // eslint-disable-next-line
  }, [counter])

  return (
    <Wrapper>
      <div className='button-container section'>
        <button className='btn'>
          <ImLocation fontSize='0.8rem' style={{ marginRight: '0.3rem' }} />
          Toute la France
        </button>
        <button className='btn' onClick={toggleSearch}>
          Filtres
        </button>
        <button className='btn'>Tri: Plus récentes</button>
      </div>
      <div className='check-box-container section'>
        <div className='s-b'>
          <input type='checkbox' id='' name='' checked readOnly />
          <span>Particuliers</span>
        </div>
        <div className='s-b'>
          <input type='checkbox' id='' name='' checked readOnly />
          <span>Professionnels</span>
        </div>
        <div className='s-b'>
          <input type='checkbox' id='' name='' checked readOnly />
          <ImStarFull
            fontSize='0.8rem'
            style={{ color: '#FF6E13', marginRight: '1rem' }}
          />
          <span style={{ color: '#FF6E13' }}>Urgentes</span>
        </div>
      </div>
      <div className='offers-container section'>
        <h3>Annonces: Toute la France</h3>
        {isLoading ? (
          <div className='card-container'>
            <p>Loading...</p>
          </div>
        ) : (
          <div className='card-container'>
            {offers.map((offer) => {
              return (
                <Link
                  to={`/offer/${offer._id}`}
                  key={offer._id}
                  style={{ width: '100%' }}
                >
                  <Card {...offer} />
                </Link>
              )
            })}
          </div>
        )}
        <div className='bottom-container s-b'>
          <button
            className='btn'
            onClick={() => {
              if (counter > 1) {
              }
              setCounter(counter - 1)
            }}
          >
            <FaChevronLeft fontSize='1.5rem' style={{ color: '#939ea9' }} />
          </button>
          <input
            type='number'
            placeholder={counter}
            value={counter}
            onChange={(event) => {
              setCounter(event.target.value)
            }}
          />{' '}
          /{!isLoading && <span>{Math.ceil(pageNumber)}</span>}
          <button
            className='btn'
            onClick={() => {
              if (counter < pageNumber) {
                setCounter(counter + 1)
              }
            }}
          >
            <FaChevronRight fontSize='1.5rem' style={{ color: '#939ea9' }} />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default OffersSmall

const Wrapper = styled.section`
  display: grid;
  min-height: 100vh;
  z-index: 0;
  grid-template-rows: 3rem 3rem auto;
  grid-row-gap: 1rem;
  .button-container {
    grid-row: 1/2;
    /* background: var(--clr-white-1); */
    border-bottom: 1px solid var(--clr-grey-3);

    button {
      font-size: 0.85rem;
      border: 1px solid var(--clr-grey-3);
      border-radius: 25px;
      outline: none;
      margin-left: 0;
      margin: 0.5rem;
    }
  }
  .check-box-container {
    grid-row: 2/3;
    display: flex;
    div {
      margin-right: 1rem;
      input {
        margin-right: 1rem;
        margin-left: 0.5rem;
        /* background: var(--clr-orange) */
      }
      span {
        font-weight: bold;
      }
    }
  }
  .offers-container {
    grid-row: 3/4;
    display: flex;
    flex-direction: column;

    h3 {
      margin-left: 0.5rem;
    }
  }
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0.5rem;
  }

  .bottom-container {
    width: 60%;
    height: 3.5rem;
    padding: 0.5rem 1rem 1rem 1rem;
    input {
      height: 2rem;
      width: 4rem;
      background: var(--clr-white-1);
      border: 1px solid var(--clr-grey-2);
      border-radius: var(--radius);
      padding-left: 1rem;
    }
    input::placeholder {
      text-align: center;
    }
    button {
      outline: none;
    }
    span {
      color: var(--clr-grey-2);
    }
  }
`
