import React from 'react'
import Menu from './Menu'
import aboutPhoto from '../img/about_photo.jpg'
import DoubleArrow from './DoubleArrow'
import useWindowDimension from './useWindowDemension'

const AboutMe = () => {
  const { width } = useWindowDimension()

  return (
    <section className='about-me'>
      {width > 425 && <Menu />}
      <div className='about-me__container'>
        <div className='about-me__img'>
          <img src={aboutPhoto} alt='jason-wood' />
        </div>
        <div className='about-me__info'>
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <h3>Jason Wood</h3>
        </div>
      </div>
      {width > 425 && (
        <DoubleArrow text={'keep scrolling, there is still more to come.'} />
      )}
    </section>
  )
}

export default AboutMe
