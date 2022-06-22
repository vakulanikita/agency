import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Home.module.scss'
import Container from '../components/Container'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <div className={s.root}>
      <Header />
      <HeroSection />
    </div>
  )
}

export default Home
