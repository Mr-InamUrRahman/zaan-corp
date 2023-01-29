import './resources/assets/css/styles.css'
import Head from './components/Layout/Head/Head'
import MainHeader from './components/Layout/MainHeader/MainHeader'
import SideNav from './components/Layout/SideNav/SideNav'

import { Inter } from '@next/font/google'
const inter = Inter({ 
  subsets: ['latin'], 
  display: 'swap',
})

const  Layout =( {children,} : {children: React.ReactNode})=> {

  return (
    <html className={inter.className}>
      <Head />
      <body>
        <main className="flex items-start">
          <SideNav />
          <section className={`wrapper`}>
            <MainHeader />
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}

export default Layout;