import Navbar from '@/pages/components/Navbar'
import Footer from '@/pages/components/Footer'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
        <Head>
            <link rel='shortcut icon' href='/public/images/favicon.ico'/>
            <title>PokeNext</title>
            <link href="https://fonts.cdnfonts.com/css/8bit-wonder" rel="stylesheet"/>
        </Head>
            <Navbar/>
            <main className='main-container'>{children}</main>
            <Footer/>
        </>
    )
}