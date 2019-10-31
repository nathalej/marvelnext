import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Comics = () => (
  <div>
    <Head>
      <title>Comics | Marvel Catalog</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='comics'>
      <h1 className='title'>Welcome to Marvel Catalog</h1>      
    </div>
  </div>
)

export default Comics
