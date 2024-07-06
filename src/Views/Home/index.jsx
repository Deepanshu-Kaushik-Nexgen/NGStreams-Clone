import React from 'react'
import './style.scss'
import HeroSection from '../../components/HeroSection/index'
import ClientSection from '../../components/clientSection/index'
import ArticlesSection from '../../components/Arcticles/index'

function index() {
  return (
    <>
    <HeroSection />
    <ClientSection />
    <ArticlesSection />
    </>
  )
}

export default index