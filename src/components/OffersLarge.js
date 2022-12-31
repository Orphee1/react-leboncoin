import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card, SearchBox } from './index'
import { ImStarFull } from 'react-icons/im'
import options from '../constants/sortOptions'
import { useProductsContext } from '../context/productsContext'
const OffersLarge = () => {
  const { count, handleSkip, handleSort, isLoading, limit, offers, skipTab } =
    useProductsContext()
  // console.log(offers)
  return (
    <Wrapper>
      <div className='top'>
        <div className='ellipse'></div>
        <section className='fl-col'>
          <SearchBox />
        </section>
      </div>
      <section className='center fl-col'>
        <div className='filters s-b'>
          <div className='s-b'>
            <p>Annonces:</p> {!isLoading && <span>{count}</span>}
            <input type='checkbox' readOnly />
          </div>
          <div className='s-b'>
            <p>Particuliers</p> <span>16</span>
            <input type='checkbox' readOnly />
          </div>
          <div className='s-b'>
            <p>Professionnels</p> <span>12</span>
            <input type='checkbox' readOnly />
          </div>
          <div className='s-b'>
            <input type='checkbox' readOnly />
            <ImStarFull
              fontSize='0.8rem'
              style={{ color: '#FF6E13', marginRight: '1rem' }}
            />
            <p style={{ color: '#FF6E13', fontWeight: 'bold' }}>Urgentes</p>
          </div>
          <select
            onChange={(event) => {
              //       handleSort(event.target.value);
              handleSort(event)
            }}
          >
            {options}
          </select>
        </div>
        <h3>Annonces catégorie : Toute la France</h3>
        <div className='offers-container fl-col'>
          {isLoading ? (
            <div className='card-container fl-col'>
              <p>...loading</p>
            </div>
          ) : (
            <div className='card-container fl-col'>
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
        </div>
        <div className='bottom-container fl-col'>
          {!isLoading && (
            <div className='skip-container s-b'>
              {skipTab.map((item, index) => {
                return (
                  <button
                    className='btn'
                    key={index}
                    onClick={() => {
                      handleSkip(index * limit)
                    }}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  )
}

export default OffersLarge

const Wrapper = styled.section`
  display: grid;
  grid-row: 20rem 1fr;
  grid-row-gap: 1rem;
  .top {
    position: relative;
    grid-row: 1/2;
    width: 100%;
    section {
      padding-top: 3rem;
    }
  }
  .ellipse {
    height: 100px;
    width: 100%;
    position: absolute;
    border-radius: 100% 100% 100% 100% / 0% 0% 100% 100%;
    -webkit-border-radius: 50% 50% 50% 50% / 0% 0% 70% 70%;
    -moz-border-radius: 50% 50% 50% 50% / 0% 0% 70% 70%;
    background-color: var(--clr-orange);
    z-index: 10;
  }
  .center {
    grid-row: 2/3;
    width: 980px;
    height: 100%;
    margin: 0 auto;

    .filters {
      width: 100%;
      margin: auto;
      padding: 0.5rem;
      span {
        margin-left: 0.5rem;
        color: var(--clr-orange);
      }
      input {
        margin: 0 1rem;
      }
    }

    .offers-container {
      width: 100%;
      margin: auto;
    }

    .card-container {
      width: 70%;
      margin: auto;

      padding: 0 1rem 1rem 2rem;
    }
    .bottom-container {
      width: 100%;
      height: 2.5rem;
      padding-bottom: 1rem;
    }

    .skip-container {
      width: auto;
      margin: auto;
      button {
        margin: 0 1rem;
        color: var(--clr-blue);
      }
    }
  }
`
