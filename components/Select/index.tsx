import React from 'react'
import { TCategory } from '../../redux/models/TCategory'
import clsx from 'clsx'
import s from './Select.module.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks/redux'
import { AppDispatch } from '../../redux/store/store'
import { ActionCreator, ActionCreatorWithPayload, ThunkDispatch } from '@reduxjs/toolkit'


interface SelectProps {
  options: TCategory[],
  onChange: ActionCreatorWithPayload<TCategory, string>
}


const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const dispatch = useAppDispatch()
  const { activeCategory } = useAppSelector(state => state.cardSlice)
  const selectRef = React.useRef(null)
  const [selectIsOpen, setSelectIsOpen] = React.useState(false)

  const optionsElements = options.map((elem) => {
    return (
      <div
        key={elem}
        className={clsx(
          s.option,
          activeCategory === elem && s.active
        )}
        onClick={() => {
          setSelectIsOpen(false)
          dispatch(onChange(elem))
        }}
      >
        {elem}
      </div>
    );
  });

  return (
    <div className={s.root}>
      <div
        ref={selectRef}
        onClick={() => {
          setSelectIsOpen(!selectIsOpen);
        }}
        className={s.select}
      >
        <span>{activeCategory}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
          <path id="Triangle" d="M5,0l5-6H0Z" transform="translate(0 6)" />
        </svg>
      </div>
      <div
        ref={selectRef}
        className={clsx(s.optionsWrapper, selectIsOpen && s.active)}
      >
        {optionsElements}
      </div>
    </div>
  )
}

export default Select