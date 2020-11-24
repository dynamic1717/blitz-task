import React from 'react'
import Menu from './Menu'
import MenuMobile from './MenuMobile'
import DoubleArrow from './DoubleArrow'
import useWindowDimension from './useWindowDemension'

const Home = () => {
  const { width } = useWindowDimension()

  return (
    <section className='home'>
      {width < 768 ? <MenuMobile /> : <Menu />}
      {width > 768 && <DoubleArrow text={'scroll down to see more'} />}
    </section>
  )
}

export default Home
