import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { offersActions } from '../../store/offers-slice'
import styled from 'styled-components'
import { SkipButton } from '../../components'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export const SkipContainer = () => {
  const dispatch = useDispatch()
  const {
    count,
    fetchParams: { limit },
  } = useSelector((state) => state.offers)
  const [skip, setSkip] = useState(0)
  // console.log('render')
  // console.log(skip)

  let skipTab = []
  for (let i = 0; i < count / 10; i++) {
    skipTab.push(i + 1)
  }

  const handleSkipButtonChange = (index) => {
    setSkip(index)
  }

  const handleSkipArrowLeft = () => {
    if (skip > 0) {
      setSkip((skip) => skip - 1)
    }
  }

  const handleSkipArrowRight = () => {
    if (skip < skipTab.length - 1) {
      setSkip((skip) => skip + 1)
    }
  }

  useEffect(() => {
    dispatch(offersActions.handleSkip(skip * limit))
  }, [dispatch, skip, limit])

  return (
    <Wrapper>
      <SkipButton inv={skip > 0 ? '' : 'inv'}>
        <FaChevronLeft onClick={handleSkipArrowLeft} />
      </SkipButton>
      {skipTab.map((s, i) => {
        return (
          <SkipButton
            key={i}
            value={s}
            onClick={() => handleSkipButtonChange(i)}
          ></SkipButton>
        )
      })}
      <SkipButton inv={skip < skipTab.length - 1 ? '' : 'inv'}>
        <FaChevronRight onClick={handleSkipArrowRight} />
      </SkipButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
