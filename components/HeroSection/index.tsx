import React from 'react'
import s from './HeroSection.module.scss'

const HeroSection: React.FC = () => {
  return (
    <section className={s.root}>
      <h1 className={s.title}>Portfolio</h1>
      <div className={s.subtitle}>Agency provides a full service range including
      technical skills, design, business<br /> understanding.</div>
    </section>
  )
}

export default HeroSection