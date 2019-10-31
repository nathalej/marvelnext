import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Superfriends = () => (
  <div>
    <Head>
      <title>Superfriends | Marvel Catalog</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className='superfriends'>
      <h1 className='title'>Welcome to Marvel Catalog</h1>      
    </div>
  </div>
)

export default Superfriends