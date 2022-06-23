import React from 'react'
import clsx from 'clsx'
import s from './CategoryFilter.module.scss'
import Container from '../Container'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
import { cardSlice } from '../../redux/store/reducers/CardSlice'
import { TCategory } from '../../redux/models/TCategory'
import Select from '../Select'

const categories: TCategory[] = [
  "Show All", "Design", "Branding", "Illustration", "Motion"
]

const CategoryFilter: React.FC = () => {
  const dispatch = useAppDispatch()
  const { activeCategory } = useAppSelector(state => state.cardSlice)
  const { changeCategory } = cardSlice.actions

  return (
    <div className={s.root}>
      <Container>
        <div className={s.list}>
          {categories.map(elem => {
            return (
              <div
                key={elem}
                className={clsx(s.item, activeCategory === elem && s.active)}
                onClick={() => {
                  console.log('click');
                  dispatch(changeCategory(elem))
                }}
              >
                {elem}
              </div>
            )
          })}
        </div>

        <Select options={categories} onChange={changeCategory} />

      </Container>
    </div>
  )
}

export default CategoryFilter