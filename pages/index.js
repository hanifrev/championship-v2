import Head from 'next/head'
import Image from 'next/image'
import Test from '../src/components/Test'
import Main from '../src/components/Main'

console.log(process.env.THE_API_KEY)

export default function Home() {
  const API_KEY = `${process.env.THE_API_KEY}`
  console.log(API_KEY)
  return (
    <div className="">
      <Head>
        <title>The Championship</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ fontFamily: ['Ubuntu', 'sans-serif'], }} className="bg-stadium">
        <div className="bg-opac">
          <Main />
          <Test />
        </div>
      </div>
    </div>
  )
}
