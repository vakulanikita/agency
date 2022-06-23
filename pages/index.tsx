import React from 'react'
import type { NextPage } from 'next'
import s from '../styles/Home.module.scss'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import CategoryFilter from '../components/CategoryFilter'
import CardGrid from '../components/CardGrid'
import Button from '../components/Button'
import { useAppDispatch, useAppSelector } from '../redux/hooks/redux'
import { cardSlice } from '../redux/store/reducers/CardSlice'

interface KeyboardEvent {
  key: string;
}

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { addCards, deleteActiveCards } = cardSlice.actions

  // if not wrapped in useCallback, this event is called when the page did mount
  const handleClickDelete = React.useCallback((event: KeyboardEvent) => {
    if (event.key === "Delete") {
      dispatch(deleteActiveCards())
    }
  }, [])

  React.useEffect(() => {
    document.addEventListener("keydown", handleClickDelete);

    return () => {
      document.removeEventListener("keydown", handleClickDelete);
    };
  }, [handleClickDelete]);

  return (
    <div className={s.root}>
      <Header />
      <HeroSection />
      <main>
        <div className={s.categoryFilter}>
          <CategoryFilter />
        </div>
        <div className={s.cardGrid}>
          <CardGrid />
        </div>
        <div className={s.button} onClick={() => {
          dispatch(addCards())
        }}>
          <Button variant="contained" paddingX={46}>Load more</Button>
        </div>
      </main>
    </div>
  )
}

export default Home
