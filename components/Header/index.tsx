import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import s from './Header.module.scss'
import Container from '../Container'
import Button from '../Button'

const Header: React.FC = () => {
  return (
    <header className={s.root}>
      <Container>
        <NextLink href="#" passHref>
          <div className={s.logo}>
            <Image src="/logo.svg" alt="Logo" width={46} height={44} />
            <a>Agency</a>
          </div>
        </NextLink>

        <nav className={s.navbar}>
          <NextLink href="#" passHref>
            <a>About</a>
          </NextLink>
          <NextLink href="#" passHref>
            <a>Services</a>
          </NextLink>
          <NextLink href="#" passHref>
            <a>Pricing</a>
          </NextLink>
          <NextLink href="#" passHref>
            <a>Blog</a>
          </NextLink>
        </nav>

        <Button variant="outlined">Contact</Button>
      </Container>
    </header>
  )
}

export default Header