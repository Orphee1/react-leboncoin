import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { offersActions } from '../../store/offers-slice'
import { SearchBox } from '../../components'
import { BsListCheck } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import categoriesOptions from '../../constants/selectOptions'
import sortOptions from '../../constants/sortOptions'

export const SearchBoxContainer = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  const handleTitleInputChange = ({ target }) => {
    // dispatch(offersActions.handleTitle(target.value))
    setTitle(target.value)
  }

  const handleSortSelecterChange = ({ target }) => {
    dispatch(offersActions.handleSort(target.value))
  }

  const handleCategorySelecterChange = ({ target }) => {
    dispatch(offersActions.handleCategory(target.value))
  }

  const handlePriceMinInputChange = ({ target }) => {
    dispatch(offersActions.handlePriceMin(target.value))
  }

  const handlePriceMaxInputChange = ({ target }) => {
    dispatch(offersActions.handlePriceMax(target.value))
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(offersActions.handleTitle(title))
    }, 600)
    return () => {
      clearTimeout(timer)
    }
  }, [dispatch, title])

  return (
    <SearchBox>
      <SearchBox.Box>
        <SearchBox.Box>
          <BsListCheck />
          <SearchBox.Selecter onChange={handleCategorySelecterChange}>
            {categoriesOptions}
          </SearchBox.Selecter>
        </SearchBox.Box>
        <SearchBox.Box>
          <GoSearch />
          <SearchBox.Input
            onChange={handleTitleInputChange}
            placeholder='Que recherchez vous?'
          />
        </SearchBox.Box>
      </SearchBox.Box>
      <SearchBox.Box>
        <SearchBox.Box>
          <SearchBox.Text>Prix minimum:</SearchBox.Text>
          <SearchBox.Input onChange={handlePriceMinInputChange} />
        </SearchBox.Box>
        <SearchBox.Box>
          <SearchBox.Text>Prix maximum:</SearchBox.Text>
          <SearchBox.Input onChange={handlePriceMaxInputChange} />
        </SearchBox.Box>
        <SearchBox.Selecter onChange={handleSortSelecterChange}>
          {sortOptions}
        </SearchBox.Selecter>
      </SearchBox.Box>
    </SearchBox>
  )
}
