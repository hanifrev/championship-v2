import Head from 'next/head'
import Image from 'next/image'
import Test from '../src/components/Test'
import Main from '../src/components/Main'

export default function Home() {
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
