import Footer from "../../Components/footer/Footer"
import Header from "../../Components/header/header"
import HeroBanner from "./heroBanner/HeroBanner"
import Popular from "./popular/Popular"
import "./style.scss"
import TopRated from "./topRated/TopRated"
import Trending from "./trending/Trending"
export default function Home() {
  return (
    <div>
    <Header/>
        <HeroBanner/>
        <Trending/>
        <Popular/>
        <TopRated/>
    <Footer/>
    
    </div>
  )
}
