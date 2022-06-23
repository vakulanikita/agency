import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import s from './Card.module.scss'
import Badge from '../Badge'
import { useAppDispatch } from '../../redux/hooks/redux'
import { cardSlice } from '../../redux/store/reducers/CardSlice'
import { ICard } from '../../redux/models/ICard'

interface CardProps {
  item: ICard
}

const Card: React.FC<CardProps> = ({
  item,
}) => {
  const dispatch = useAppDispatch()
  const { toggleActive, changeCategory } = cardSlice.actions

  return (
    <div className={s.root} onClick={() => {
      dispatch(toggleActive(item.id))
    }}>
      <div className={clsx(s.mask, item.isActive && s.active)}></div>
      <Image src={item.src} layout="fill" objectFit="cover" quality={100} alt="SOFA" />

      <div className={s.content}>
        <div
          className={s.badge}
          onClick={(e) => {
            e.stopPropagation()
            dispatch(changeCategory(item.category))
          }}
        >
          <Badge>{item.category}</Badge>
        </div>
        <br/>
        <div className={s.title}>{item.title}</div>
      </div>
    </div>
  )
}

export default Card