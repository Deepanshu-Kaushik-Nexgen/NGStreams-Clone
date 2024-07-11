import React from 'react'
import './style.scss'
import HeroSection from '../../components/HeroSection/index'
import ClientSection from '../../components/clientSection/index'
import ArticlesSection from '../../components/Arcticles/index'
import Offerings from '../../components/offerings/index'
import WhyChooseUs from '../../components/whyChooseUs'
import TrustedBy from '../../components/trustedBy'
import FAQ from '../../components/Faq\'s'
import Form from '../../components/Form'

function index() {
  return (
    <>
    <HeroSection />
    <ClientSection />
    <ArticlesSection />
    <Offerings />
    <WhyChooseUs />
    <TrustedBy />
    <FAQ />
    <Form />
    </>
  )
}

export default index