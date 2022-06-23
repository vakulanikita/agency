import React from 'react'
import s from './CardGrid.module.scss'
import Card from '../Card'
import Container from '../Container'
// import { nanoid } from 'nanoid'
import { useAppSelector } from '../../redux/hooks/redux'
import { TCategory } from '../../redux/models/TCategory'
import { ICard } from '../../redux/models/ICard'

const CardGrid: React.FC = () => {
  const { cards, activeCategory } = useAppSelector(state => state.cardSlice)

  function cardsFilter(cards: ICard[], category: TCategory) {
    if(category === 'Show All') return cards

    const filteredCards = cards.filter(s => s.category === category)
    return filteredCards
  }

  const visibleCards = cardsFilter(cards, activeCategory)

  return (
    <div className={s.root}>
      <Container>
        {visibleCards.map(item => (
          <Card
            item={item}
            key={item.id}
          />
        ))}
      </Container>
    </div>
  )
}

export default CardGrid