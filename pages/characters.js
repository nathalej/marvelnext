import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Characters = () => (
  <div>
    <Head>
      <title>Characters | Marvel Catalog</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='characters'>
      <h1 className='title'>Welcome to Marvel Catalog</h1>      
    </div>
  </div>
)

export default Characters