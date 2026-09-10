
import { Suspense } from 'react'
import './App.css'
import Banner from './component/banner'
import Nav from './component/nav'
import Technologies from './component/technologies'
import type { ITechnologyType } from './type/technologyType'
import Footer from './component/footer'



const dataPromise=async():Promise<ITechnologyType[]>=>{
    const res = await fetch('/data.json')
    const data = await res.json()
    return data
  }

function App() {

  return (
    <>
     
     
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Technologies dataPromise={dataPromise()}></Technologies>
      </Suspense>
      <Footer></Footer>
     

    </>
  )
}

export default App
